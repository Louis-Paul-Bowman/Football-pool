import { db } from '$lib/db/db.server';
import { picks } from '$lib/db/schemas/picks/+schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import type { games } from '$lib/db/schemas/games/schema';
import { selectable } from '$lib/helpers';

type GamePicks = Record<
	typeof games.$inferSelect.id,
	Pick<typeof picks.$inferSelect, 'playerId' | 'pick' | 'spread'>[]
>;

export const load = (async ({ parent }) => {
	const { league, weeks } = await parent();

	let leaguePicks = await db.select().from(picks).where(eq(picks.league, league.id));

	let formatted: GamePicks = {};

	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (selectable(weekData.games[0].date)) {
			continue;
		}

		weekData.games.forEach((game) => {
			formatted[game.id] = [];
		});
	}

	leaguePicks.forEach((pick) => {
		if (formatted[pick.gameId] !== undefined) {
			formatted[pick.gameId].push({
				playerId: pick.playerId,
				pick: pick.pick,
				spread: pick.spread
			});
		}
	});

	return { formatted };
}) satisfies PageServerLoad;
