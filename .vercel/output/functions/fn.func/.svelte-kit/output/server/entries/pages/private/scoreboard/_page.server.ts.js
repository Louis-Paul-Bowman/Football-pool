import { d as db, p as players } from "../../../../chunks/api.js";
import { eq } from "drizzle-orm";
import { b as getGamePicks } from "../../../../chunks/funcs.server.js";
const load = async ({ parent }) => {
  let { league, weeks } = await parent();
  let leaguePlayers = await db.select({ id: players.id, name: players.name }).from(players).where(eq(players.league, league.id));
  let gamePicks = await getGamePicks(league, weeks);
  return { leaguePlayers, gamePicks };
};
export {
  load
};
