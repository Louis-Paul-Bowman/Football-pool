import type { PageServerLoad } from './$types';
import {
	fetchScores,
	assertSeasonTypes,
	getEspnFullSeasonData,
	type SeasonTypes
} from '$lib/espnApi';
import { getFullSeasonData, getLiveData, getUserLeaguesData } from '$lib/db/funcs.server';
import { error } from '@sveltejs/kit';

export const load = (async ({ locals: { user } }) => {
	// let currentYear = 2024;
	let currentWeek = 9;
	// let seasontype: SeasonTypes = 2;
	// let maxAgeMins = 5;
	// let seasonData = await getLiveData(currentYear, seasontype, currentWeek, maxAgeMins);

	if (user === null) {
		return error(403, 'Forbidden');
	}

	let playerLeaguesData = await getUserLeaguesData(user);

	if (playerLeaguesData.length === 0) {
		//register user in league?
	}

	if (playerLeaguesData.length > 1) {
		return error(500, "Can't currently handle multiple leagues simultaneously.");
	}

	const data = playerLeaguesData[0];
	return { ...data, currentWeek };
}) satisfies PageServerLoad;
