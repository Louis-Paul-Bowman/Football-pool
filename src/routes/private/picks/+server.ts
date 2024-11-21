import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { eq, and, lte, inArray } from 'drizzle-orm';
import { leagues } from '$lib/db/schemas/leagues/+schema';
import { games } from '$lib/db/schemas/games/schema';
import { picks } from '$lib/db/schemas/picks/+schema';
import { chronologicalSort, selectable } from '$lib/helpers';
import { validateSelections } from '$lib/api';
import { updateMultiplePicks, type PickUpdate } from '$lib/db/funcs.server';

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

	let eventIds: string[] = Object.keys(selections);

	const registered = await db
		.select()
		.from(players)
		.where(and(eq(players.accountUUID, user.id), eq(players.league, leagueId)))
		.innerJoin(leagues, eq(players.league, leagues.id));

	if (registered.length === 0) {
		return error(400, `User is not registered in league ${leagueId}`);
	}
	const player = registered[0].players;
	const league = registered[0].leagues;
	const leagueWeeks = league.weeks;

	const gamesData = await db
		.select()
		.from(games)
		.where(
			and(
				// inArray(games.id, eventIds),
				eq(games.year, league.year),
				eq(games.seasonType, league.seasonType)
			)
		)
		.leftJoin(picks, and(eq(games.id, picks.gameId), eq(picks.playerId, player.id)));

	let picksInserts: (typeof picks.$inferInsert)[] = [];
	let picksUpdates: PickUpdate[] = [];

	eventIds.forEach((id) => {
		let val = gamesData.find((element) => element.games.id === id);
		if (val === undefined) {
			return error(400, `Not all games found. Some games aren't in league ${leagueId}`);
		}
		let game = val.games;
		let pick = val.picks;
		let weekGames = gamesData
			.filter((element) => element.games.week === game.week)
			.map((element) => element.games);
		weekGames = chronologicalSort(weekGames);
		let weekStart = weekGames[0].date;

		let { selected, spread } = selections[game.id];

		if (!selectable(weekStart)) {
			return error(400, `Game ${game.id} can no longer be selected.`);
		}

		if (spread !== null && !league.spreadGames.includes(game.id)) {
			return error(400, `Game ${game.id} is not a spread game but a spread was selected.`);
		}

		if (pick === null) {
			picksInserts.push({
				playerId: player.id,
				league: league.id,
				gameId: game.id,
				pick: selected,
				spread
			});
		} else {
			picksUpdates.push({ id: pick.id, pick: selected, spread });
		}
	});

	let inserted: (typeof picks.$inferInsert)[] = [];
	let updated: (typeof picks.$inferInsert)[] = [];
	if (picksInserts.length > 0) {
		inserted = await db.insert(picks).values(picksInserts).returning();
	}
	if (picksUpdates.length > 0) {
		updated = await updateMultiplePicks(picksUpdates);
	}

	return new Response(`Inserted ${inserted.length} picks and updated ${updated.length} picks.`);
};
