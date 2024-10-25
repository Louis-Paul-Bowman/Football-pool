import type { PageServerLoad } from './$types';
import {fetchScores, SeasonWeeks, validateFullSeasonData} from "$lib/espnApi"
import type {EspnScoreboardResponse, FullSeasonData} from "$lib/espnApi";

export const load = (async () => {
    //No params gives current week
    let currentWeekData = await fetchScores()

    let currentYear = currentWeekData.season.year
    let currentWeek =  currentWeekData.week.number
    let seasontype = currentWeekData.season.type
    let weeks = SeasonWeeks[seasontype]

    let scores: any = {};

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

    validateFullSeasonData(scores, seasontype)
    

    const data = {scores, currentYear, currentWeek, seasontype, weeks}
    return data;
}) satisfies PageServerLoad;