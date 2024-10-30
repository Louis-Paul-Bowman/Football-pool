import type { RequestHandler } from './$types';
import { DB_ADMIN_UUID } from '$env/static/private';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schemas/games/schema';
import { getEspnFullSeasonData, assertSeasonTypes, StrSeasonTypesSchema, type SeasonTypes, type StrSeasonTypes, type TeamIds } from '$lib/espnApi';
import { error } from '@sveltejs/kit';
import { byes } from '$lib/db/schemas/byes/schema';

export const GET: RequestHandler = async ({ locals: { user }, url }) => {
	const whitelisted_ids = [DB_ADMIN_UUID]
	if (!user || !whitelisted_ids.includes(user.id)){
		return error(403, "Forbidden")
	}

	

	let yearParam = url.searchParams.get("year");
	let seasonTypeParam = url.searchParams.get("seasonType");
	if (yearParam === null || seasonTypeParam === null) {
		return error(400, "Must specify year and seasonType")
	}
	let year = Number(yearParam)

	
	let seasonType: Number | SeasonTypes = Number(seasonTypeParam);
	assertSeasonTypes(seasonType)
	
	let gamesInserts: (typeof games.$inferInsert)[] = [];
	let byesInserts: (typeof byes.$inferInsert)[] = [];
	let fullSeasonData = await getEspnFullSeasonData(year, seasonType);

	for (const [week, data] of Object.entries(fullSeasonData)) {
		data.events.forEach((event) => {
			let url: string | null = null;
			event.links.forEach((link) => {
				if (link.text === 'Gamecast') {
					url = link.href;
				}
			});

            const [comp1, comp2] = event.competitions[0].competitors;

            const homeTeam = comp1.homeAway == 'home' ? comp1 : comp2;
            const homeId = homeTeam.id;
            const awayTeam = comp1.homeAway == 'away' ? comp1 : comp2;
	        const awayId = awayTeam.id;


			gamesInserts.push({
				id: event.id,
				year: year,
				seasonType: Number(seasonType),
				week: Number(week),
				date: new Date(event.date),
                home: homeId,
                away: awayId,
                homeScore: homeTeam.score,
                awayScore: awayTeam.score,
                link:url,
				active: event.status.type.state === "in" ,
				final:event.status.type.completed
			});
		});
		if (data.week.teamsOnBye !== undefined) {
			data.week.teamsOnBye.forEach(team => byesInserts.push({
				year:year,
				seasonType:Number(seasonType),
				week:Number(week),
				team: team.id,
			}))
		}
	}
    const insertedGames = await db.insert(games).values(gamesInserts).returning()
	const insertedByes = await db.insert(byes).values(byesInserts).returning()
	return new Response(`Success. Inserted ${insertedGames.length} games and ${insertedByes.length} byes.`);
};
