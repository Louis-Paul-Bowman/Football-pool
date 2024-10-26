import type { PageServerLoad } from './$types';
import {
	fetchScores,
	SeasonWeeks,
	assertFullSeasonData,
	assertSeasonTypes,
	chronologicalSort
} from '$lib/espnApi';
import type { EspnScoreboardResponse } from '$lib/espnApi';

export const load = (async () => {
	//No params gives current week
	let currentWeekData = await fetchScores();

	let currentYear = currentWeekData.season.year;
	let currentWeek = currentWeekData.week.number;
	let seasontype = currentWeekData.season.type;
	assertSeasonTypes(seasontype);
	let weeks = SeasonWeeks[seasontype];

	let scores: any = {};

	await Promise.all(
		weeks.map(async (week) => {
			let weekData: EspnScoreboardResponse;

			if (week !== currentWeek) {
				weekData = await fetchScores(String(currentYear), seasontype, week);
			} else {
				weekData = currentWeekData;
			}
			weekData.events = chronologicalSort(weekData.events);

			scores[week] = weekData;
		})
	);

	assertFullSeasonData(scores, seasontype);

	const data = { scores, currentYear, currentWeek, seasontype, weeks };
	return data;
}) satisfies PageServerLoad;
