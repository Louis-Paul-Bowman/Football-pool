import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { getUserLeaguesData } from '$lib/db/funcs.server';
import { getCurrentWeek, type PlayerLeagueData } from '$lib/api';

export const GET: RequestHandler = async ({ url, locals: { user } }) => {
	const maxAgeMins = 5;
	let leagueId: number | string | null = url.searchParams.get('leagueId');

	if (leagueId === null) {
		return error(400, "Must specify a valid 'leagueId' param.");
	}

	leagueId = Number(leagueId);

	if (!user) {
		return error(403, 'Forbidden');
	}

	const playerLeaguesData = await getUserLeaguesData(user, maxAgeMins);
	const data = playerLeaguesData.find(
		(playerLeagueData) => playerLeagueData.league.id === leagueId
	);

	if (!data) {
		return error(400, `User is not registered in league with id ${leagueId}.`);
	}

	return json({ ...data, currentWeek: getCurrentWeek(data.league) });
};
