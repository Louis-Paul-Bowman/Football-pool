import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { and, lte, eq, gte } from 'drizzle-orm';
import { games } from '$lib/db/schemas/games/schema';
import { db } from '$lib/db/db.server';
import { fetchScores, type EspnScoreboardResponse, type SeasonTypes } from '$lib/espnApi';
import { EspnEventtoGame, type FullSeasonData } from '$lib/api';
import {
	updateMultipleGames,
	weeksNeedingUpdate,
	type GameUpdate,
	getFullSeasonData,
	getLiveData
} from '$lib/db/funcs.server';
import { chronologicalSort } from '$lib/helpers';
import { leagues } from '$lib/db/schemas/leagues/+schema';
import { players } from '$lib/db/schemas/players/+schema';

export const GET: RequestHandler = async () => {
	let data: any = [];

	let activePlayers = await db.select().from(players).where(eq(players.league, 1));
	data = activePlayers;

	return json(data);
};
