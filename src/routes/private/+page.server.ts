import type { PageServerLoad } from './$types';
import { fetchScores, assertSeasonTypes, getEspnFullSeasonData } from '$lib/espnApi';
import { getFullSeasonData } from '$lib/db/funcs.server';

export const load = (async () => {
	//No params gives current week
	let currentWeekData = await fetchScores();

	let currentYear = currentWeekData.season.year;
	let currentWeek = currentWeekData.week.number;
	let seasontype = currentWeekData.season.type;
	assertSeasonTypes(seasontype);

	let seasonData = await getFullSeasonData(currentYear, seasontype);

	const data = { seasonData, currentYear, currentWeek, seasontype };
	return data;
}) satisfies PageServerLoad;
