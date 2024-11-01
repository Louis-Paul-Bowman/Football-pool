import { seasonWeeks, fetchScores } from '$lib/espnApi';
import type { SeasonTypes, EspnScoreboardResponse } from '$lib/espnApi';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schemas/games/schema';
import { byes } from '$lib/db/schemas/byes/schema';
import { chronologicalSort } from '$lib/helpers';
import { EspnEventtoGame } from '$lib/api';
import type { FullSeasonData } from '$lib/api';
import { and, inArray, eq, sql, SQL } from 'drizzle-orm';

export async function getFullSeasonData<T extends SeasonTypes>(
	year: number,
	seasonType: T
): Promise<FullSeasonData<T>> {
	let weeks = Array.from(seasonWeeks[seasonType]);
	let gamesData = await db
		.select()
		.from(games)
		.where(and(inArray(games.week, weeks), eq(games.seasonType, seasonType), eq(games.year, year)));

	let byesData = await db
		.select()
		.from(byes)
		.where(and(inArray(byes.week, weeks), eq(byes.seasonType, seasonType), eq(byes.year, year)));
	let temp: any = {};
	weeks.forEach((week) => (temp[week] = { games: [], byes: [] }));
	gamesData.forEach((game) => temp[game.week].games.push(game));
	weeks.forEach((week) => (temp[week].games = chronologicalSort(temp[week].games)));
	byesData.forEach((bye) => temp[bye.week].byes.push(bye.team));
	return temp as FullSeasonData<T>;
}

export interface GameUpdate {
	id: typeof games.$inferInsert.id;
	updated: typeof games.$inferInsert.updated;
	homeScore?: typeof games.$inferInsert.homeScore;
	awayScore?: typeof games.$inferInsert.awayScore;
	active?: typeof games.$inferInsert.active;
	final?: typeof games.$inferInsert.final;
}

const createCaseStatement = (columnName: keyof GameUpdate, updates: GameUpdate[]) => {
	const sqlChunks: SQL[] = [sql`(case`];

	for (const update of updates) {
		if (update[columnName] !== undefined) {
			let value: SQL;

			if (columnName === 'updated' && update.updated instanceof Date) {
				// Convert Date to ISO8601 string
				value = sql`${update.updated.toISOString()}`;
			} else {
				value = sql`${update[columnName]}`;
			}

			// Handle type casting for specific columns
			if (columnName === 'homeScore' || columnName === 'awayScore') {
				value = sql`cast(${value} as integer)`;
			} else if (columnName === 'active' || columnName === 'final') {
				value = sql`cast(${value} as boolean)`;
			} else if (columnName === 'updated') {
				value = sql`cast(${value} as timestamp)`;
			}

			sqlChunks.push(sql`when ${games.id} = ${update.id} then ${value}`);
		}
	}

	sqlChunks.push(sql`end)`);

	return sql.join(sqlChunks, sql.raw(' '));
};

export async function updateMultipleGames(
	updates: GameUpdate[]
): Promise<(typeof games.$inferSelect)[]> {
	if (updates.length === 0) return [];

	const updatedCase = createCaseStatement('updated', updates);
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
			final: finalCase,
			updated: updatedCase
		})
		.where(inArray(games.id, ids))
		.returning();
	return res;
}


export function weeksNeedingUpdate<T extends SeasonTypes>(seasonData:FullSeasonData<T>, currentWeek:number, maxAgeMins:number): number[] {
let weeksToUpdate: number[] = [];
for (const week in seasonData) {
	const data = seasonData[week]
	data.games.forEach((game) => {
		let weekNum = Number(week) //shut up typescript
		if (weeksToUpdate.includes(weekNum)) {
			return
		}
		if (game.final){
			return
		}
		if (game.week > currentWeek){
			return
		}
		//Games that are not final from this week or earlier
		let ageMs = (new Date(Date.now())).getTime() - game.updated.getTime()
		let ageMins = ageMs / (1000 * 60)
		if (ageMins < maxAgeMins){
			return
		}
		weeksToUpdate.push(weekNum)
	})
}	
return weeksToUpdate
}

async function getUpdates(currentYear:number, seasonType:number, weeksToUpdate:number[]){
	let updates: GameUpdate[][] = await Promise.all(
		weeksToUpdate.map(async (week) => {
			let weekData: EspnScoreboardResponse;

			//data from ESPN
			weekData = await fetchScores(String(currentYear), seasonType, week);

			return weekData.events.map((event) => {
				let game = EspnEventtoGame(event, week);

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
	return updates
}

export async function getLiveData(currentYear:number,  seasonType:SeasonTypes, currentWeek:number, maxAgeMins:number) {
	//(Possibly out of date) data from DB
	let data = await getFullSeasonData(currentYear, seasonType)

	//Figure out what DB data needs to be updated in the DB
	let weeksToUpdate = weeksNeedingUpdate(data, currentWeek, maxAgeMins)

	//Apply updates to DB
	let updates = await getUpdates(currentYear, seasonType, weeksToUpdate);
	let affected = await updateMultipleGames(updates.flat());

	//Avoid a new DB call by updating in place from update return
	weeksToUpdate.forEach((week) => data[week].games = []);
	affected.forEach((game) => data[game.week].games.push(game));
	weeksToUpdate.forEach((week) => (data[week].games = chronologicalSort(data[week].games)));
	return data
}