import type { PageServerLoad } from './$types';
import {fetchScores} from "$lib/espnApi"
import type {EspnScoreboardResponse, SeasonTypes} from "$lib/espnApi";


function currentWeek(): number {
    const currentDate = new Date();
    const givenDateMs = new Date("2024-09-03").getTime();
    const currentDateMs = currentDate.getTime();
    
    const differenceInMs = currentDateMs - givenDateMs;
    const weeks = Math.floor(differenceInMs / (7 * 24 * 60 * 60 * 1000));
    
    return 1 + weeks;
}

export const load = (async () => {
    let week = currentWeek()
    let seasontype: SeasonTypes  = 2
    if (week > 18) {
        seasontype = 3
        week = week - 18
    }

    var dates = String(new Date(Date.now()).getFullYear())
    
    var scores:EspnScoreboardResponse = await fetchScores(dates, seasontype, week)

    const data = {scores, week, seasontype, dates}
    return data;
}) satisfies PageServerLoad;