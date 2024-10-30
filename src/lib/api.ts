import { seasonWeeks } from "./espnApi";
import type { SeasonTypes, ValidTeamIds } from "./espnApi";
import { games } from "./db/schemas/games/schema";

export type FullSeasonData<T extends SeasonTypes> = {
	[K in keyof (typeof seasonWeeks)[T]]: {games: (typeof games.$inferSelect)[],
    byes:ValidTeamIds[]};
};