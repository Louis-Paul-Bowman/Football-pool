import type { PageServerLoad } from './$types';
import {fetchScores, SeasonWeeks} from "$lib/espnApi"
import type {EspnScoreboardResponse, EspnWeek, SeasonTypes} from "$lib/espnApi";

export const load = (async () => {
    //No params gives current week
    let currentWeekData = await fetchScores()

    let currentYear = currentWeekData.season.year
    let currentWeek =  currentWeekData.week.number
    let seasontype = currentWeekData.season.type
    let weeks = SeasonWeeks[seasontype]

    type FullSeasonData<T extends SeasonTypes> = 
    {[K in keyof typeof SeasonWeeks[T]]: EspnScoreboardResponse}

    let scores: FullSeasonData<typeof seasontype> = {};

    await Promise.all(
        weeks.map(async (week) => {
          let weekData: EspnScoreboardResponse;
          
          if (week !== currentWeek) {
            weekData = await fetchScores(String(currentYear), seasontype, week);
          } else {
            weekData = currentWeekData;
          }
      
          scores[week] = weekData;
        })
      );
    

    const data = {scores, currentYear, currentWeek, seasontype, weeks}
    return data;
}) satisfies PageServerLoad;