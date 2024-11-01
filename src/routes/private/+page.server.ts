import type { PageServerLoad } from './$types';
import { fetchScores, assertSeasonTypes, getEspnFullSeasonData, type SeasonTypes } from '$lib/espnApi';
import { getFullSeasonData, getLiveData } from '$lib/db/funcs.server';

export const load = (async () => {
	//No params gives current week
	// let currentWeekData = await fetchScores();

	// let currentYear = currentWeekData.season.year;
	// let currentWeek = currentWeekData.week.number;
	// let seasontype = currentWeekData.season.type;
	// assertSeasonTypes(seasontype);
	let currentYear = 2024;
	let currentWeek = 9;
	let seasontype:SeasonTypes = 2;
	let maxAgeMins = 5;

	let seasonData = await getLiveData(currentYear, seasontype, currentWeek, maxAgeMins);

	const data = { seasonData, currentYear, currentWeek, seasontype };
	return data;
}) satisfies PageServerLoad;
