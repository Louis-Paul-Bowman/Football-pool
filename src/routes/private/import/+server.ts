import type { RequestHandler } from './$types';
import { DB_ADMIN_UUID } from '$env/static/private';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schema/games/schema';
import { getFullSeasonData, type SeasonTypes, type StrSeasonTypes, type TeamIds } from '$lib/espnApi';
import { error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals: { user } }) => {
	const whitelisted_ids = [DB_ADMIN_UUID]
	if (!user || !whitelisted_ids.includes(user.id)){
		return error(403, "Forbidden")
	}

	let year = 2024;
	let seasonType: SeasonTypes = 2;
	let strSeasonType: StrSeasonTypes = '2';
	let inserts: (typeof games.$inferInsert)[] = [];
	let fullSeasonData = await getFullSeasonData(year, seasonType);

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


			inserts.push({
				id: event.id,
				year: year,
				seasonType: strSeasonType,
				week: Number(week),
				date: new Date(event.date),
                home: homeId,
                away: awayId,
                homeScore: homeTeam.score,
                awayScore: awayTeam.score,
                link:url,
				final:event.status.type.completed
			});
		});
	}
    const inserted = await db.insert(games).values(inserts).returning()
	return new Response(`Success. Inserted ${inserted.length} rows.`);
};
