import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { and, lte, sql, SQL, inArray, eq } from 'drizzle-orm';
import { games } from '$lib/db/schemas/games/schema';
import { db } from '$lib/db/db.server';
import { fetchScores, type EspnScoreboardResponse } from '$lib/espnApi';
import { EspnEventtoGame } from '$lib/api';

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
					homeScore: game.homeScore,
					awayScore: game.awayScore,
					active: game.active,
					final: game.final
				};
			});
		})
	);

	let res = await updateMultipleGames(updates.flat());
	console.log(res);

	return json(res);
};

interface GameUpdate {
	id: typeof games.$inferInsert.id;
	homeScore?: typeof games.$inferInsert.homeScore;
	awayScore?: typeof games.$inferInsert.awayScore;
	active?: typeof games.$inferInsert.active;
	final?: typeof games.$inferInsert.final;
}

const createCaseStatement = (columnName: keyof GameUpdate, updates: GameUpdate[]) => {
	const sqlChunks: SQL[] = [sql`(case`];

	for (const update of updates) {
		if (update[columnName] !== undefined) {
			let value = sql`${update[columnName]}`;

			// Stupid sql raw strips type data
			if (columnName === 'homeScore' || columnName === 'awayScore') {
				value = sql`cast(${value} as integer)`;
			} else if (columnName === 'active' || columnName === 'final') {
				value = sql`cast(${value} as boolean)`;
			}

			sqlChunks.push(sql`when ${games.id} = ${update.id} then ${value}`);
		}
	}
	sqlChunks.push(sql`end)`);

	return sql.join(sqlChunks, sql.raw(' '));
};

async function updateMultipleGames(updates: GameUpdate[]): Promise<(typeof games.$inferSelect)[]> {
	if (updates.length === 0) return [];

	const homeScoreCase = createCaseStatement('homeScore', updates);
	const awayScoreCase = createCaseStatement('awayScore', updates);
	const activeCase = createCaseStatement('active', updates);
	const finalCase = createCaseStatement('final', updates);

	const ids = updates.map((update) => update.id);

	let res = db
		.update(games)
		.set({
			homeScore: homeScoreCase,
			awayScore: awayScoreCase,
			active: activeCase,
			final: finalCase
		})
		.where(inArray(games.id, ids))
		.returning();
	return res;
}
