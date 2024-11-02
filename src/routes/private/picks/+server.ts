import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { ValidTeamIdsSchema, type ValidTeamIds } from '$lib/espnApi';
import { z } from 'zod';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { eq, and, lte, inArray } from 'drizzle-orm';
import { leagues } from '$lib/db/schemas/leagues/+schema';
import { games } from '$lib/db/schemas/games/schema';
import { picks } from '$lib/db/schemas/picks/+schema';

export const POST: RequestHandler = async ({ locals: { user }, request }) => {
	if (user === null) {
		return error(403, 'Forbidden');
	}

	let data = await request.json();

	let { leagueId, selections } = data;

	if (typeof leagueId !== 'number') {
		return error(400, 'Must specify seasonId as number.');
	}

	try {
		validateSelections(selections);
	} catch (e) {
		return error(400, 'Selections do not satisfy expected format.');
	}

	let eventIds: string[] = [];
	let counts: Record<string, number> = {};

	selections.forEach((selection) => {
		counts[selection.eventId] = (counts[selection.eventId] ?? 0) + 1;
		eventIds.push(selection.eventId);
	});

	let duplicateGames: string[] = [];

	for (const [eventId, count] of Object.entries(counts)) {
		if (count > 1) {
			duplicateGames.push(eventId);
		}
	}

	if (duplicateGames.length > 0) {
		return error(
			400,
			`Games ${duplicateGames} are specified more than once. Only one pick must be made per game.`
		);
	}

	const join = await db
		.select()
		.from(players)
		.where(and(eq(players.accountUUID, user.id), eq(players.league, leagueId)))
		.innerJoin(leagues, eq(players.league, leagues.id));

	const join2 = await db
		.select()
		.from(games)
		.where(inArray(games.id, eventIds))
		.leftJoin(picks, eq(games.id, picks.gameId));

	console.log(join);
	console.log(join2);

	return new Response();
};

const SelectionsSchema = z.array(
	z.object({
		eventId: z.string(),
		selected: ValidTeamIdsSchema,
		spread: z.number().int().positive().nullable()
	})
);

type Selections = z.infer<typeof SelectionsSchema>;

function validateSelections(obj: any): asserts obj is Selections {
	SelectionsSchema.parse(obj);
}
