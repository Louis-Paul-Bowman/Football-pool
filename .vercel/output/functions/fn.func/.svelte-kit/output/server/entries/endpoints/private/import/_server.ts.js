import { E as EspnEventtoGame, d as db, g as games, b as byes, l as leagues, D as DB_ADMIN_UUID } from "../../../../chunks/api.js";
import { a as assertSeasonTypes, g as getEspnFullSeasonData, f as fetchScores } from "../../../../chunks/espnApi.js";
import { e as error } from "../../../../chunks/index.js";
const GET = async ({ locals: { user }, url }) => {
  const whitelisted_ids = [DB_ADMIN_UUID];
  if (!user || !whitelisted_ids.includes(user.id)) {
    return error(403, "Forbidden");
  }
  let yearParam = url.searchParams.get("year");
  let seasonTypeParam = url.searchParams.get("seasonType");
  if (yearParam === null || seasonTypeParam === null) {
    return error(400, "Must specify year and seasonType");
  }
  let year = Number(yearParam);
  let seasonType = Number(seasonTypeParam);
  assertSeasonTypes(seasonType);
  let gamesInserts = [];
  let byesInserts = [];
  let fullSeasonData = await getEspnFullSeasonData(year, seasonType);
  for (const [week, data] of Object.entries(fullSeasonData)) {
    data.events.forEach((event) => gamesInserts.push(EspnEventtoGame(event, Number(week))));
    if (data.week.teamsOnBye !== void 0) {
      data.week.teamsOnBye.forEach(
        (team) => byesInserts.push({
          year,
          seasonType: Number(seasonType),
          week: Number(week),
          team: team.id
        })
      );
    }
  }
  const insertedGames = await db.insert(games).values(gamesInserts).returning();
  const insertedByes = await db.insert(byes).values(byesInserts).returning();
  let leaguesInserts = [];
  let currentWeek = await fetchScores();
  let calendar = currentWeek.leagues[0].calendar;
  let season = calendar[seasonType - 1];
  let seasonWeeks = {};
  season.entries.forEach((game) => {
    seasonWeeks[Number(game.value)] = {
      start: new Date(game.startDate),
      end: new Date(game.endDate)
    };
  });
  leaguesInserts.push({
    year,
    seasonType,
    start: new Date(season.startDate),
    end: new Date(season.endDate),
    weeks: seasonWeeks
  });
  const insertedLeagues = await db.insert(leagues).values(leaguesInserts).returning();
  return new Response(
    `Success. Inserted ${insertedGames.length} games,  ${insertedByes.length} byes, and ${insertedLeagues.length} leagues.`
  );
};
export {
  GET
};
