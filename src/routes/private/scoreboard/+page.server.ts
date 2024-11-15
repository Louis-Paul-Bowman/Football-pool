import type { PageServerLoad } from './$types';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { eq } from 'drizzle-orm';
import { getGamePicks } from '$lib/db/funcs.server';

export const load = (async ({ parent }) => {
	let { league, weeks } = await parent();

	let leaguePlayers = await db
		.select({ id: players.id, name: players.name })
		.from(players)
		.where(eq(players.league, league.id));

	let gamePicks = await getGamePicks(league, weeks);
	return { leaguePlayers, gamePicks };
}) satisfies PageServerLoad;
