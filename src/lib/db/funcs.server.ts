import { seasonWeeks } from "$lib/espnApi";
import type { SeasonTypes } from "$lib/espnApi";
import { db } from "$lib/db/db.server";
import { games } from "$lib/db/schemas/games/schema";
import { byes } from "$lib/db/schemas/byes/schema";
import { chronologicalSort } from "$lib/helpers";
import type { FullSeasonData } from "$lib/api";
import { and, inArray, eq } from "drizzle-orm";

export async function getFullSeasonData<T extends SeasonTypes>(
    seasonType: T
  ): Promise<FullSeasonData<T>> {
    let weeks = Array.from(seasonWeeks[seasonType])
    let gamesData = await db
    .select()
    .from(games)
    .where(
        and(inArray(games.week, weeks),
            eq(games.seasonType, seasonType))
        )

    let byesData = await db
    .select()
    .from(byes)
    .where(and(inArray(byes.week, weeks),
    eq(byes.seasonType, seasonType))
    );
    let temp: any = {}
    weeks.forEach(week => temp[week] = {games:[],
    byes:[]})
    gamesData.forEach((game) => temp[game.week].games.push(game))
    weeks.forEach(week => temp[week].games = chronologicalSort(temp[week].games))
    byesData.forEach(bye => temp[bye.week].byes.push(bye.team))
    return temp as FullSeasonData<T>
}