/**
 * This file is necessary to ensure protection of all routes in the `private`
 * directory. It makes the routes in this directory _dynamic_ routes, which
 * send a server request, and thus trigger `hooks.server.ts`.
 **/

import type { LayoutServerLoad } from './$types';
import { getUserLeaguesData, getUniqueLeague } from '$lib/db/funcs.server';
import { error } from '@sveltejs/kit';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/schema';
import { getCurrentWeek } from '$lib/api';
import { PROTO, VERCEL_PROJECT_PRODUCTION_URL } from '$env/static/private';

export const load = (async ({ locals: { user } }) => {
	const currentLeague = await getUniqueLeague();
	const maxAgeMins = 0.5;
	//updating flexed games for inactive weeks
	const forceRefreshNextWeek = true;

	if (user === null) {
		return error(403, 'Forbidden');
	}

	let playerLeaguesData = await getUserLeaguesData(user, maxAgeMins, forceRefreshNextWeek);

	if (playerLeaguesData.length === 0) {
		//register user in league?
		await db.insert(players).values({
			accountUUID: user.id,
			name: user.user_metadata.display_name,
			league: currentLeague.id,
			paid: false
		});
		playerLeaguesData = await getUserLeaguesData(user, maxAgeMins, forceRefreshNextWeek);
	}

	if (playerLeaguesData.length > 1) {
		return error(500, "Can't currently handle multiple leagues simultaneously.");
	}

	const playerLeagueData = playerLeaguesData[0];

	return {
		...playerLeagueData,
		currentWeek: getCurrentWeek(playerLeagueData.league),
		proto: PROTO,
		baseUrl: VERCEL_PROJECT_PRODUCTION_URL
	};
}) satisfies LayoutServerLoad;
