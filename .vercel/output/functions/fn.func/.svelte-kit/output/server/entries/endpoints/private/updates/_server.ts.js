import { e as error, j as json } from "../../../../chunks/index.js";
import { g as getUserLeaguesData, b as getGamePicks } from "../../../../chunks/funcs.server.js";
import { d as db, p as players, c as getCurrentWeek } from "../../../../chunks/api.js";
import { eq } from "drizzle-orm";
const GET = async ({ url, locals: { user } }) => {
  const maxAgeMins = 0.5;
  let leagueId = url.searchParams.get("leagueId");
  if (leagueId === null) {
    return error(400, "Must specify a valid 'leagueId' param.");
  }
  leagueId = Number(leagueId);
  if (!user) {
    return error(403, "Forbidden");
  }
  const playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);
  const playerLeagueData = playerLeaguesData.find(
    (playerLeagueData2) => playerLeagueData2.league.id === leagueId
  );
  if (!playerLeagueData) {
    return error(400, `User is not registered in league with id ${leagueId}.`);
  }
  let leaguePlayers = await db.select({ id: players.id, name: players.name }).from(players).where(eq(players.league, playerLeagueData.league.id));
  let gamePicks = await getGamePicks(playerLeagueData.league, playerLeagueData.weeks);
  return json({
    ...playerLeagueData,
    currentWeek: getCurrentWeek(playerLeagueData.league),
    leaguePlayers,
    gamePicks
  });
};
export {
  GET
};
