import { c as chronologicalSort, s as selectable, u as unflattenWeeks, f as fetchScores } from "./espnApi.js";
import { d as db, g as games, c as getCurrentWeek, a as picks, p as players, l as leagues, b as byes, E as EspnEventtoGame } from "./api.js";
import { and, gte, lte, inArray, getTableColumns, eq, sql } from "drizzle-orm";
const createGamesCaseStatement = (columnName, updates) => {
  const sqlChunks = [sql`(case`];
  for (const update of updates) {
    if (update[columnName] !== void 0) {
      let value;
      if (columnName === "updated" && update.updated instanceof Date) {
        value = sql`${update.updated.toISOString()}`;
      } else {
        value = sql`${update[columnName]}`;
      }
      if (columnName === "homeScore" || columnName === "awayScore") {
        value = sql`cast(${value} as integer)`;
      } else if (columnName === "active" || columnName === "final") {
        value = sql`cast(${value} as boolean)`;
      } else if (columnName === "updated") {
        value = sql`cast(${value} as timestamp)`;
      }
      sqlChunks.push(sql`when ${games.id} = ${update.id} then ${value}`);
    }
  }
  sqlChunks.push(sql`end)`);
  return sql.join(sqlChunks, sql.raw(" "));
};
async function updateMultipleGames(updates) {
  if (updates.length === 0) return [];
  const updatedCase = createGamesCaseStatement("updated", updates);
  const homeScoreCase = createGamesCaseStatement("homeScore", updates);
  const awayScoreCase = createGamesCaseStatement("awayScore", updates);
  const activeCase = createGamesCaseStatement("active", updates);
  const finalCase = createGamesCaseStatement("final", updates);
  const ids = updates.map((update) => update.id);
  let res = db.update(games).set({
    homeScore: homeScoreCase,
    awayScore: awayScoreCase,
    active: activeCase,
    final: finalCase,
    updated: updatedCase
  }).where(inArray(games.id, ids)).returning();
  return res;
}
function weeksNeedingUpdate(gamesData, currentWeek, maxAgeMins) {
  let weeksToUpdate = [];
  let unflattenedWeeks = unflattenWeeks(gamesData);
  for (const [week, data] of Object.entries(unflattenedWeeks)) {
    data.forEach((game) => {
      let weekNum = Number(week);
      if (weeksToUpdate.includes(weekNum)) {
        return;
      }
      if (game.final) {
        return;
      }
      if (game.week > currentWeek) {
        return;
      }
      let ageMs = new Date(Date.now()).getTime() - game.updated.getTime();
      let ageMins = ageMs / (1e3 * 60);
      if (ageMins < maxAgeMins) {
        return;
      }
      weeksToUpdate.push(weekNum);
    });
  }
  return weeksToUpdate;
}
async function getUpdates(league, weeksToUpdate) {
  let updates = await Promise.all(
    weeksToUpdate.map(async (week) => {
      let weekData;
      weekData = await fetchScores(String(league.year), league.seasonType, week);
      return weekData.events.map((event) => {
        let game = EspnEventtoGame(event, week);
        return {
          id: game.id,
          updated: new Date(Date.now()),
          homeScore: game.homeScore,
          awayScore: game.awayScore,
          active: game.active,
          final: game.final
        };
      });
    })
  );
  return updates;
}
async function updateLeagueData(league, maxAgeMins) {
  let gamesData = await db.select().from(games).where(and(gte(games.date, league.start), lte(games.date, league.end)));
  let currentWeek = getCurrentWeek(league);
  if (currentWeek === null) {
    throw new Error("Not an active league");
  }
  let weeksToUpdate = weeksNeedingUpdate(gamesData, currentWeek, maxAgeMins);
  let updates = await getUpdates(league, weeksToUpdate);
  let affected = await updateMultipleGames(updates.flat());
  console.log("Updated", affected.length, "games");
  return affected;
}
const createPicksCaseStatement = (columnName, updates) => {
  const sqlChunks = [sql`(case`];
  for (const update of updates) {
    if (update[columnName] !== void 0) {
      let value;
      if (columnName === "pick") {
        value = sql`cast(${update.pick} as "teamIdsEnum")`;
      } else if (columnName === "spread") {
        if (update.spread === null) {
          value = sql.raw("NULL");
        } else {
          value = sql`${update.spread}`;
        }
      } else {
        throw new Error("Invalid column.");
      }
      sqlChunks.push(sql`when ${picks.id} = ${update.id} then ${value}`);
    }
  }
  sqlChunks.push(sql`end)`);
  const caseStatement = sql.join(sqlChunks, sql.raw(" "));
  if (columnName === "spread") {
    return sql`cast(${caseStatement} as integer)`;
  } else {
    return caseStatement;
  }
};
async function updateMultiplePicks(updates) {
  if (updates.length === 0) return [];
  const pickCase = createPicksCaseStatement("pick", updates);
  const spreadCase = createPicksCaseStatement("spread", updates);
  const ids = updates.map((update) => update.id);
  let res = db.update(picks).set({
    pick: pickCase,
    spread: spreadCase
  }).where(inArray(picks.id, ids)).returning();
  return res;
}
async function getUserLeaguesData(user, maxAgeMins) {
  let data = [];
  let now = new Date(Date.now());
  let { year, seasonType, ...rest } = getTableColumns(games);
  let userActiveLeagues = await db.select({
    player: { id: players.id, paid: players.paid },
    league: { ...getTableColumns(leagues) }
  }).from(players).where(eq(players.accountUUID, user.id)).innerJoin(
    leagues,
    and(eq(players.league, leagues.id), lte(leagues.start, now), gte(leagues.end, now))
  );
  for await (const { player, league } of userActiveLeagues) {
    await updateLeagueData(league, maxAgeMins);
    let gamesData = await db.select({ ...rest, pick: picks.pick, spread: picks.spread }).from(games).where(and(eq(games.year, league.year), eq(games.seasonType, league.seasonType))).leftJoin(picks, and(eq(games.id, picks.gameId), eq(picks.playerId, player.id)));
    let byesData = await db.select({ week: byes.week, team: byes.team }).from(byes).where(and(eq(byes.year, league.year), eq(byes.seasonType, league.seasonType)));
    let weeks = {};
    Object.keys(league.weeks).forEach((week) => {
      weeks[Number(week)] = { games: [], byes: [] };
    });
    gamesData.forEach((game) => {
      weeks[game.week].games.push(game);
    });
    byesData.forEach((bye) => {
      weeks[bye.week].byes.push(bye.team);
    });
    Object.keys(weeks).forEach((week) => {
      weeks[Number(week)].games = chronologicalSort(weeks[Number(week)].games);
    });
    data.push({
      player,
      league,
      weeks
    });
  }
  return data;
}
async function getGamePicks(league, weeks) {
  let gamePicks = {};
  let leaguePicks = await db.select().from(picks).where(eq(picks.league, league.id));
  for (const [weekNum, weekData] of Object.entries(weeks)) {
    if (selectable(weekData.games[0].date)) {
      continue;
    }
    weekData.games.forEach((game) => {
      gamePicks[game.id] = {};
    });
  }
  leaguePicks.forEach((pick) => {
    if (gamePicks[pick.gameId] !== void 0) {
      gamePicks[pick.gameId][pick.playerId] = {
        pick: pick.pick,
        spread: pick.spread
      };
    }
  });
  return gamePicks;
}
export {
  updateLeagueData as a,
  getGamePicks as b,
  getUserLeaguesData as g,
  updateMultiplePicks as u
};
