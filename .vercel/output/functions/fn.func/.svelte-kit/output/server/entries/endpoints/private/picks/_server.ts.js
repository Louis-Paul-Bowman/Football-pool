import { e as error } from "../../../../chunks/index.js";
import { v as validateSelections, d as db, p as players, l as leagues, g as games, a as picks } from "../../../../chunks/api.js";
import { and, eq, inArray } from "drizzle-orm";
import { s as selectable } from "../../../../chunks/espnApi.js";
import { u as updateMultiplePicks } from "../../../../chunks/funcs.server.js";
const POST = async ({ locals: { user }, request }) => {
  if (user === null) {
    return error(403, "Forbidden");
  }
  let data = await request.json();
  let { leagueId, selections } = data;
  if (typeof leagueId !== "number") {
    return error(400, "Must specify seasonId as number.");
  }
  try {
    validateSelections(selections);
  } catch (e) {
    return error(400, "Selections do not satisfy expected format.");
  }
  let eventIds = Object.keys(selections);
  const registered = await db.select().from(players).where(and(eq(players.accountUUID, user.id), eq(players.league, leagueId))).innerJoin(leagues, eq(players.league, leagues.id));
  if (registered.length === 0) {
    return error(400, `User is not registered in league ${leagueId}`);
  }
  const player = registered[0].players;
  const league = registered[0].leagues;
  const leagueWeeks = league.weeks;
  const gamesData = await db.select().from(games).where(
    and(
      inArray(games.id, eventIds),
      eq(games.year, league.year),
      eq(games.seasonType, league.seasonType)
    )
  ).leftJoin(picks, and(eq(games.id, picks.gameId), eq(picks.playerId, player.id)));
  if (gamesData.length !== eventIds.length) {
    return error(400, `Not all games found. Some games aren't in league ${leagueId}`);
  }
  let picksInserts = [];
  let picksUpdates = [];
  gamesData.forEach((element) => {
    let game = element.games;
    let pick = element.picks;
    let weekStart = leagueWeeks[game.week].start;
    let { selected, spread } = selections[game.id];
    if (!selectable(weekStart)) {
      return error(400, `Game ${game.id} can no longer be selected.`);
    }
    if (spread !== null && !league.spreadGames.includes(game.id)) {
      return error(400, `Game ${game.id} is not a spread game but a spread was selected.`);
    }
    if (pick === null) {
      picksInserts.push({
        playerId: player.id,
        league: league.id,
        gameId: game.id,
        pick: selected,
        spread
      });
    } else {
      picksUpdates.push({ id: pick.id, pick: selected, spread });
    }
  });
  let inserted = [];
  let updated = [];
  if (picksInserts.length > 0) {
    inserted = await db.insert(picks).values(picksInserts).returning();
  }
  if (picksUpdates.length > 0) {
    updated = await updateMultiplePicks(picksUpdates);
  }
  return new Response(`Inserted ${inserted.length} picks and updated ${updated.length} picks.`);
};
export {
  POST
};
