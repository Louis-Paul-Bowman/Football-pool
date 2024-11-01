import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { and, lte, eq } from 'drizzle-orm';
import { games } from '$lib/db/schemas/games/schema';
import { db } from '$lib/db/db.server';
import { fetchScores, type EspnScoreboardResponse, type SeasonTypes } from '$lib/espnApi';
import { EspnEventtoGame, type FullSeasonData } from '$lib/api';
import { updateMultipleGames, weeksNeedingUpdate, type GameUpdate, getFullSeasonData, getLiveData } from '$lib/db/funcs.server';
import { chronologicalSort } from '$lib/helpers';

export const GET: RequestHandler = async () => {
	// let currentWeekData = await fetchScores();
	// let currentYear = currentWeekData.season.year;
	// let currentWeek = currentWeekData.week.number;
	// let seasonType = currentWeekData.season.type;
	// let weeksToUpdate = (
	// 	await db
	// 		.select({ week: games.week })
	// 		.from(games)
	// 		.where(and(eq(games.year, currentYear), lte(games.week, currentWeek), eq(games.final, false)))
	// ).map((res) => res.week);
	let currentYear = 2024
	let currentWeek = 9
	let seasonType:SeasonTypes = 2
	let maxAgeMins = 5;

	let data = await getLiveData(currentYear, seasonType, currentWeek, maxAgeMins)

	return json(data);
};
