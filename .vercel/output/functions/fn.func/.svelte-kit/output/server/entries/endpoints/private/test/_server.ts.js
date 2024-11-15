import { e as error, j as json } from "../../../../chunks/index.js";
import { a as updateLeagueData } from "../../../../chunks/funcs.server.js";
import { d as db, l as leagues } from "../../../../chunks/api.js";
import { eq } from "drizzle-orm";
const GET = async ({ locals: { user } }) => {
  if (user === null) {
    return error(403, "Forbidden");
  }
  let leagueId = 1;
  let league = (await db.select().from(leagues).where(eq(leagues.id, leagueId)))[0];
  let updated = await updateLeagueData(league, 5);
  return json(updated);
};
export {
  GET
};
