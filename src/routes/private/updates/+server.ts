import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { getUserLeaguesData, getGamePicks } from '$lib/db/funcs.server';
import { getCurrentWeek } from '$lib/api';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/schema';
import { eq } from 'drizzle-orm';

export const GET: RequestHandler = async ({ url, locals: { user } }) => {
	const maxAgeMins = 0.5;
	//updating flexed games for inactive weeks, currently handled by the root +layout.server.ts call
	const forceRefreshNextWeek = false;
	let leagueId: number | string | null = url.searchParams.get('leagueId');

	if (leagueId === null) {
		return error(400, "Must specify a valid 'leagueId' param.");
	}

	leagueId = Number(leagueId);

	if (!user) {
		return error(403, 'Forbidden');
	}

	const playerLeaguesData = await getUserLeaguesData(user, maxAgeMins, forceRefreshNextWeek);
	const playerLeagueData = playerLeaguesData.find(
		(playerLeagueData) => playerLeagueData.league.id === leagueId
	);

	if (!playerLeagueData) {
		return error(400, `User is not registered in league with id ${leagueId}.`);
	}

	let leaguePlayers = await db
		.select({ id: players.id, name: players.name })
		.from(players)
		.where(eq(players.league, playerLeagueData.league.id));

	let gamePicks = await getGamePicks(playerLeagueData.league, playerLeagueData.weeks);

	return json({
		...playerLeagueData,
		currentWeek: getCurrentWeek(playerLeagueData.league),
		leaguePlayers,
		gamePicks
	});
};
