import { db } from '$lib/db/db.server';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { players } from '$lib/db/schemas/players/+schema';
import { getGamePicks } from '$lib/db/funcs.server';

export const load = (async ({ parent }) => {
	const { league, weeks } = await parent();

	let leaguePlayers = await db
		.select({ id: players.id, name: players.name })
		.from(players)
		.where(eq(players.league, league.id));

	let gamePicks = await getGamePicks(league, weeks);

	return { gamePicks, leaguePlayers };
}) satisfies PageServerLoad;
