import type { RequestHandler } from './$types';
import { DB_ADMIN_UUID } from '$env/static/private';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schemas/games/schema';
import {
	getEspnFullSeasonData,
	assertSeasonTypes,
	StrSeasonTypesSchema,
	type SeasonTypes,
	type StrSeasonTypes,
	type TeamIds,
	fetchScores
} from '$lib/espnApi';
import { error } from '@sveltejs/kit';
import { byes } from '$lib/db/schemas/byes/schema';
import { EspnEventtoGame } from '$lib/api';
import { leagues, type LeagueWeeks } from '$lib/db/schemas/leagues/schema';
import { inArray } from 'drizzle-orm';

export const GET: RequestHandler = async ({ locals: { user }, url }) => {
	const whitelisted_ids = [DB_ADMIN_UUID];
	if (!user || !whitelisted_ids.includes(user.id)) {
		return error(403, 'Forbidden');
	}

	let yearParam = url.searchParams.get('year');
	let seasonTypeParam = url.searchParams.get('seasonType');
	if (yearParam === null || seasonTypeParam === null) {
		return error(400, 'Must specify year and seasonType');
	}
	let year = Number(yearParam);

	let seasonType: Number | SeasonTypes = Number(seasonTypeParam);
	assertSeasonTypes(seasonType);

	let gamesInserts: (typeof games.$inferInsert)[] = [];
	let byesInserts: (typeof byes.$inferInsert)[] = [];
	let fullSeasonData = await getEspnFullSeasonData(year, seasonType);

	for (const [week, data] of Object.entries(fullSeasonData)) {
		data.events.forEach((event) => gamesInserts.push(EspnEventtoGame(event, Number(week))));
		if (data.week.teamsOnBye !== undefined) {
			data.week.teamsOnBye.forEach((team) =>
				byesInserts.push({
					year: year,
					seasonType: Number(seasonType),
					week: Number(week),
					team: team.id
				})
			);
		}
	}
	console.log(games);
	// let ids = gamesInserts.map((g) => g.id);
	// console.log(ids);
	// let conflicts = await db.select().from(games).where(inArray(games.id, ids));
	// console.log(conflicts);
	// return new Response('ok');
	const insertedGames = await db.insert(games).values(gamesInserts).returning();
	const insertedByes = await db.insert(byes).values(byesInserts).returning();

	let leaguesInserts: (typeof leagues.$inferInsert)[] = [];

	let currentWeek = await fetchScores();
	let calendar = currentWeek.leagues[0].calendar;
	let season = calendar[seasonType - 1];
	let seasonWeeks: LeagueWeeks = {};

	season.entries.forEach((game) => {
		seasonWeeks[Number(game.value)] = {
			start: new Date(game.startDate),
			end: new Date(game.endDate)
		};
	});

	leaguesInserts.push({
		year,
		seasonType,
		start: new Date(season.startDate),
		end: new Date(season.endDate),
		weeks: seasonWeeks
	});

	const insertedLeagues = await db.insert(leagues).values(leaguesInserts).returning();

	return new Response(
		`Success. Inserted ${insertedGames.length} games,  ${insertedByes.length} byes, and ${insertedLeagues.length} leagues.`
	);
};
