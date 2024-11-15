import { g as getUserLeaguesData } from "../../../chunks/funcs.server.js";
import { e as error } from "../../../chunks/index.js";
import { d as db, p as players, c as getCurrentWeek } from "../../../chunks/api.js";
const load = async ({ locals: { user } }) => {
  const maxAgeMins = 0.5;
  if (user === null) {
    return error(403, "Forbidden");
  }
  let playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);
  if (playerLeaguesData.length === 0) {
    await db.insert(players).values({
      accountUUID: user.id,
      name: user.user_metadata.display_name,
      league: 1,
      paid: true
    });
    playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);
  }
  if (playerLeaguesData.length > 1) {
    return error(500, "Can't currently handle multiple leagues simultaneously.");
  }
  const playerLeagueData = playerLeaguesData[0];
  return {
    ...playerLeagueData,
    currentWeek: getCurrentWeek(playerLeagueData.league)
  };
};
export {
  load
};
