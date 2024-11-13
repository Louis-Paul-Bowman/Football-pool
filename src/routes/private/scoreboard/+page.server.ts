import { db } from '$lib/db/db.server';
import { picks } from '$lib/db/schemas/picks/+schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import type { games } from '$lib/db/schemas/games/schema';
import { selectable } from '$lib/helpers';
import { players } from '$lib/db/schemas/players/+schema';

type GamePicks = Record<
	typeof games.$inferSelect.id,
	Record<typeof picks.$inferSelect.playerId, Pick<typeof picks.$inferSelect, 'pick' | 'spread'>>
>;

export const load = (async ({ parent }) => {
	const { league, weeks } = await parent();

	let leaguePicks = await db.select().from(picks).where(eq(picks.league, league.id));
	let leaguePlayers = await db
		.select({ id: players.id, name:players.name })
		.from(players)
		.where(eq(players.league, league.id));

	let gamePicks: GamePicks = {};

	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (selectable(weekData.games[0].date)) {
			continue;
		}

		weekData.games.forEach((game) => {
			gamePicks[game.id] = {};
		});
	}

	leaguePicks.forEach((pick) => {
		if (gamePicks[pick.gameId] !== undefined) {
			gamePicks[pick.gameId][pick.playerId] = {
				pick: pick.pick,
				spread: pick.spread
			};
		}
	});

	return { gamePicks, leaguePlayers };
}) satisfies PageServerLoad;
