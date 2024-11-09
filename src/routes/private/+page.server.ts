import type { PageServerLoad } from './$types';
import { getUserLeaguesData } from '$lib/db/funcs.server';
import { error } from '@sveltejs/kit';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { getCurrentWeek } from '$lib/api';

export const load = (async ({ locals: { user } }) => {
	const maxAgeMins = 5;

	if (user === null) {
		return error(403, 'Forbidden');
	}

	let playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);

	if (playerLeaguesData.length === 0) {
		//register user in league?
		await db.insert(players).values({ accountUUID: user.id, league: 1, paid: true });
		playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);
	}

	if (playerLeaguesData.length > 1) {
		return error(500, "Can't currently handle multiple leagues simultaneously.");
	}

	const data = playerLeaguesData[0];
	return { ...data, currentWeek: getCurrentWeek(data.league) };
}) satisfies PageServerLoad;
