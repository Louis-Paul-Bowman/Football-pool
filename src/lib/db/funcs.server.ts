import { seasonWeeks, fetchScores } from '$lib/espnApi';
import type { SeasonTypes, EspnScoreboardResponse } from '$lib/espnApi';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schemas/games/schema';
import { byes } from '$lib/db/schemas/byes/schema';
import { picks } from './schemas/picks/+schema';
import { players } from './schemas/players/+schema';
import { leagues } from './schemas/leagues/+schema';
import { chronologicalSort, unflattenWeeks, selectable } from '$lib/helpers';
import { EspnEventtoGame, getCurrentWeek } from '$lib/api';
import type { PlayerLeagueData, GamePicks } from '$lib/api';
import { and, inArray, eq, sql, SQL, gte, lte, getTableColumns } from 'drizzle-orm';
import type { User } from '@supabase/supabase-js';

export interface GameUpdate {
	id: typeof games.$inferInsert.id;
	updated: typeof games.$inferInsert.updated;
	homeScore?: typeof games.$inferInsert.homeScore;
	awayScore?: typeof games.$inferInsert.awayScore;
	active?: typeof games.$inferInsert.active;
	final?: typeof games.$inferInsert.final;
	date?: typeof games.$inferInsert.date;
	home?: typeof games.$inferInsert.home;
	away?: typeof games.$inferInsert.away;
}

const createGamesCaseStatement = (columnName: keyof GameUpdate, updates: GameUpdate[]) => {
	const sqlChunks: SQL[] = [sql`(case`];

	for (const update of updates) {
		if (update[columnName] !== undefined) {
			let value: SQL;

			if (columnName === 'updated' && update.updated instanceof Date) {
				// Convert Date to ISO8601 string
				value = sql`${update.updated.toISOString()}`;
			} else if (columnName === 'date' && update.date instanceof Date) {
				// Convert Date to ISO8601 string
				value = sql`${update.date.toISOString()}`;
			} else {
				value = sql`${update[columnName]}`;
			}

			// Handle type casting for specific columns
			if (['homeScore', 'awayScore'].includes(columnName)) {
				value = sql`cast(${value} as integer)`;
			} else if (['active', 'final'].includes(columnName)) {
				value = sql`cast(${value} as boolean)`;
			} else if (['updated', 'date'].includes(columnName)) {
				value = sql`cast(${value} as timestamp)`;
			} else if (['home', 'away'].includes(columnName)) {
				value = sql`cast(${value} as "teamIdsEnum")`;
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

	const updatedCase = createGamesCaseStatement('updated', updates);
	const homeScoreCase = createGamesCaseStatement('homeScore', updates);
	const awayScoreCase = createGamesCaseStatement('awayScore', updates);
	const activeCase = createGamesCaseStatement('active', updates);
	const finalCase = createGamesCaseStatement('final', updates);
	const dateCase = createGamesCaseStatement('date', updates);
	const homeCase = createGamesCaseStatement('home', updates);
	const awayCase = createGamesCaseStatement('away', updates);

	const ids = updates.map((update) => update.id);

	let res = db
		.update(games)
		.set({
			homeScore: homeScoreCase,
			awayScore: awayScoreCase,
			active: activeCase,
			final: finalCase,
			updated: updatedCase,
			date: dateCase,
			home: homeCase,
			away: awayCase
		})
		.where(inArray(games.id, ids))
		.returning();
	return res;
}

export function weeksNeedingUpdate(
	gamesData: (typeof games.$inferSelect)[],
	currentWeek: number,
	maxAgeMins: number,
	forceRefreshNextWeek: boolean = false
): number[] {
	let weeksToUpdate: number[] = [];
	let unflattenedWeeks = unflattenWeeks(gamesData);
	for (const [week, data] of Object.entries(unflattenedWeeks)) {
		data.forEach((game) => {
			let weekNum = Number(week); //shut up typescript
			if (weeksToUpdate.includes(weekNum)) {
				return;
			}
			//updating flexed games for inactive weeks
			if (forceRefreshNextWeek && game.week === currentWeek + 1) {
				weeksToUpdate.push(weekNum);
				return;
			}
			if (game.final) {
				return;
			}
			if (game.week > currentWeek) {
				return;
			}
			//Games that are not final from this week or earlier
			let ageMs = new Date(Date.now()).getTime() - game.updated.getTime();
			let ageMins = ageMs / (1000 * 60);
			if (ageMins < maxAgeMins) {
				return;
			}
			weeksToUpdate.push(weekNum);
		});
	}
	return weeksToUpdate;
}

async function getUpdates(league: typeof leagues.$inferSelect, weeksToUpdate: number[]) {
	let updates: GameUpdate[][] = await Promise.all(
		weeksToUpdate.map(async (week) => {
			let weekData: EspnScoreboardResponse;

			//data from ESPN
			weekData = await fetchScores(String(league.year), league.seasonType, week);

			return weekData.events.map((event) => {
				let game = EspnEventtoGame(event, week);

				return {
					id: game.id,
					updated: new Date(Date.now()),
					homeScore: game.homeScore,
					awayScore: game.awayScore,
					active: game.active,
					final: game.final,
					date: new Date(game.date),
					home: game.home,
					away: game.away
				};
			});
		})
	);
	return updates;
}

export async function updateLeagueData(
	league: typeof leagues.$inferSelect,
	maxAgeMins: number,
	forceRefreshNextWeek: boolean = false
) {
	let gamesData = await db
		.select()
		.from(games)
		.where(and(gte(games.date, league.start), lte(games.date, league.end)));
	let currentWeek = getCurrentWeek(league);
	if (currentWeek === null) {
		throw new Error('Not an active league');
	}
	//Figure out what DB data needs to be updated in the DB
	let weeksToUpdate = weeksNeedingUpdate(gamesData, currentWeek, maxAgeMins, forceRefreshNextWeek);

	//Apply updates to DB
	let updates = await getUpdates(league, weeksToUpdate);
	let affected = await updateMultipleGames(updates.flat());
	console.log('Updated', affected.length, 'games');
	return affected;
}

export interface PickUpdate {
	id: NonNullable<typeof picks.$inferInsert.id>;
	pick: typeof picks.$inferInsert.pick;
	spread: typeof picks.$inferInsert.spread;
}

const createPicksCaseStatement = (columnName: keyof PickUpdate, updates: PickUpdate[]) => {
	const sqlChunks: SQL[] = [sql`(case`];

	for (const update of updates) {
		if (update[columnName] !== undefined) {
			let value: SQL;

			if (columnName === 'pick') {
				value = sql`cast(${update.pick} as "teamIdsEnum")`;
			} else if (columnName === 'spread') {
				if (update.spread === null) {
					value = sql.raw('NULL');
				} else {
					value = sql`${update.spread}`;
				}
			} else {
				throw new Error('Invalid column.');
			}

			sqlChunks.push(sql`when ${picks.id} = ${update.id} then ${value}`);
		}
	}

	sqlChunks.push(sql`end)`);

	const caseStatement = sql.join(sqlChunks, sql.raw(' '));

	if (columnName === 'spread') {
		return sql`cast(${caseStatement} as integer)`;
	} else {
		return caseStatement;
	}
};

export async function updateMultiplePicks(
	updates: PickUpdate[]
): Promise<(typeof picks.$inferSelect)[]> {
	if (updates.length === 0) return [];

	const pickCase = createPicksCaseStatement('pick', updates);
	const spreadCase = createPicksCaseStatement('spread', updates);

	const ids = updates.map((update) => update.id);

	let res = db
		.update(picks)
		.set({
			pick: pickCase,
			spread: spreadCase
		})
		.where(inArray(picks.id, ids))
		.returning();
	return res;
}

export async function getUserLeaguesData(
	user: User,
	maxAgeMins: number,
	forceRefreshNextWeek: boolean = false
): Promise<PlayerLeagueData[]> {
	let data: PlayerLeagueData[] = [];
	let now = new Date(Date.now());
	let { year, seasonType, ...rest } = getTableColumns(games);

	let userActiveLeagues = await db
		.select({
			player: { id: players.id, paid: players.paid },
			league: { ...getTableColumns(leagues) }
		})
		.from(players)
		.where(eq(players.accountUUID, user.id))
		.innerJoin(
			leagues,
			and(eq(players.league, leagues.id), lte(leagues.start, now), gte(leagues.end, now))
		);

	for await (const { player, league } of userActiveLeagues) {
		await updateLeagueData(league, maxAgeMins, forceRefreshNextWeek);
		let gamesData = await db
			.select({ ...rest, pick: picks.pick, spread: picks.spread })
			.from(games)
			.where(and(eq(games.year, league.year), eq(games.seasonType, league.seasonType)))
			.leftJoin(picks, and(eq(games.id, picks.gameId), eq(picks.playerId, player.id)));

		let byesData = await db
			.select({ week: byes.week, team: byes.team })
			.from(byes)
			.where(and(eq(byes.year, league.year), eq(byes.seasonType, league.seasonType)));

		let weeks: PlayerLeagueData['weeks'] = {};

		Object.keys(league.weeks).forEach((week) => {
			weeks[Number(week)] = { games: [], byes: [] };
		});

		gamesData.forEach((game) => {
			weeks[game.week].games.push(game);
		});
		byesData.forEach((bye) => {
			weeks[bye.week].byes.push(bye.team);
		});

		Object.keys(weeks).forEach((week) => {
			weeks[Number(week)].games = chronologicalSort(weeks[Number(week)].games);
		});

		data.push({
			player,
			league,
			weeks
		});
	}
	return data;
}

export async function getGamePicks(
	league: typeof leagues.$inferSelect,
	weeks: PlayerLeagueData['weeks']
) {
	let gamePicks: GamePicks = {};

	let leaguePicks = await db.select().from(picks).where(eq(picks.league, league.id));

	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (selectable(weekData.games[0].date)) {
			continue;
		}

		weekData.games.forEach((game) => {
			gamePicks[game.id] = {};
		});
	}

	leaguePicks.forEach((pick) => {
		if (gamePicks[pick.gameId] !== undefined) {
			gamePicks[pick.gameId][pick.playerId] = {
				pick: pick.pick,
				spread: pick.spread
			};
		}
	});
	return gamePicks;
}
