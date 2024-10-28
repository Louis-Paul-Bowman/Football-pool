import type { PageServerLoad } from './$types';
import { fetchScores, assertSeasonTypes, getFullSeasonData } from '$lib/espnApi';

export const load = (async () => {
	//No params gives current week
	let currentWeekData = await fetchScores();

	let currentYear = currentWeekData.season.year;
	let currentWeek = currentWeekData.week.number;
	let seasontype = currentWeekData.season.type;
	assertSeasonTypes(seasontype);

	let scores = await getFullSeasonData(currentYear, seasontype);

	const data = { scores, currentYear, currentWeek, seasontype };
	return data;
}) satisfies PageServerLoad;
