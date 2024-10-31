import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { and, lte, eq } from 'drizzle-orm';
import { games } from '$lib/db/schemas/games/schema';
import { db } from '$lib/db/db.server';
import { fetchScores, type EspnScoreboardResponse } from '$lib/espnApi';
import { EspnEventtoGame } from '$lib/api';
import { updateMultipleGames, type GameUpdate } from '$lib/db/funcs.server';

export const GET: RequestHandler = async () => {
	let currentWeekData = await fetchScores();
	let currentYear = currentWeekData.season.year;
	let currentWeek = currentWeekData.week.number;
	let seasonType = currentWeekData.season.type;
	let weeksToUpdate = (
		await db
			.select({ week: games.week })
			.from(games)
			.where(and(eq(games.year, currentYear), lte(games.week, currentWeek), eq(games.final, false)))
	).map((res) => res.week);

	let updates: GameUpdate[][] = await Promise.all(
		weeksToUpdate.map(async (week) => {
			let weekData: EspnScoreboardResponse;

			if (week === currentWeek) {
				weekData = currentWeekData;
			} else {
				weekData = await fetchScores(String(currentYear), seasonType, week);
			}

			return weekData.events.map((event) => {
				let game = EspnEventtoGame(event, currentWeek);

				return {
					id: game.id,
					updated: new Date(Date.now()),
					homeScore: game.homeScore,
					awayScore: game.awayScore,
					active: game.active,
					final: game.final
				};
			});
		})
	);

	let res = await updateMultipleGames(updates.flat());

	return json(res);
};
