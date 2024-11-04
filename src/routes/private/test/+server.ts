import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { getUserLeaguesData } from '$lib/db/funcs.server';

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

	let data = await getUserLeaguesData(user);

	return json(data[0]);
};
