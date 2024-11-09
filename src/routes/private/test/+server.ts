import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { weeksNeedingUpdate, getUserLeaguesData, updateLeagueData } from '$lib/db/funcs.server';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { and, eq, gte, lte } from 'drizzle-orm';
import { getCurrentWeek } from '$lib/api';
import { games } from '$lib/db/schemas/games/schema';
import { unflattenWeeks } from '$lib/helpers';
import { leagues } from '$lib/db/schemas/leagues/+schema';

export const GET: RequestHandler = async ({ locals: { user } }) => {
	// let data2: any = {};
	// Object.keys(data[0].league.weeks).forEach((weekNum) => {
	// 	data2[weekNum] = [];
	// });
	// data[0].games.forEach((game) => {
	// 	data2[game.week].push(game);
	// });

	// for (const [week, gamesData] of Object.entries(data2)) {
	// 	data2[week] = chronologicalSort(gamesData);
	// }
	// data[0]['games'] = data2;
	if (user === null) {
		return error(403, 'Forbidden');
	}
	let leagueId = 1;
	let league = (await db.select().from(leagues).where(eq(leagues.id, leagueId)))[0];
	let updated = await updateLeagueData(league, 5);

	return json(updated);
};
