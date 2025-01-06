import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import { weeksNeedingUpdate, getUserLeaguesData, updateLeagueData } from '$lib/db/funcs.server';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/+schema';
import { and, eq, gte, lte, getTableColumns } from 'drizzle-orm';
import { getCurrentWeek } from '$lib/api';
import { games } from '$lib/db/schemas/games/schema';
import { unflattenWeeks } from '$lib/helpers';
import { leagues } from '$lib/db/schemas/leagues/+schema';
import { picks } from '$lib/db/schemas/picks/+schema';
import { teams } from '$lib/espnApi';

const team2id = {
	Falcons: '1',
	Bills: '2',
	Bears: '3',
	Bengals: '4',
	Browns: '5',
	Cowboys: '6',
	Broncos: '7',
	Lions: '8',
	Packers: '9',
	Titans: '10',
	Colts: '11',
	Chiefs: '12',
	Raiders: '13',
	Rams: '14',
	Dolphins: '15',
	Vikings: '16',
	Patriots: '17',
	Saints: '18',
	Giants: '19',
	Jets: '20',
	Eagles: '21',
	Cardinals: '22',
	Steelers: '23',
	Chargers: '24',
	'49ers': '25',
	Seahawks: '26',
	Buccaneers: '27',
	Commanders: '28',
	Panthers: '29',
	Jaguars: '30',
	Ravens: '33',
	Texans: '34'
} as const;

async function makePicks(
	p: { p: keyof typeof team2id; s?: number }[],
	playerId: number,
	league: number,
	week: number
) {
	let res: (typeof picks.$inferInsert)[] = [];

	let weekGames = await db.select().from(games).where(eq(games.week, week));

	p.forEach((pick) => {
		let game = weekGames.find((game) => [game.home, game.away].includes(team2id[pick.p]));

		if (game === undefined) {
			throw new Error('No such game.');
		}

		let gameId = game.id;
		res.push({ league, playerId, gameId, pick: team2id[pick.p], spread: pick.s ?? null });
	});
	return res;
}

export const GET: RequestHandler = async ({ locals: { user } }) => {
	// let p: { p: keyof typeof team2id; s?: number }[] = [
	// 	{ p: 'Lions' },
	// 	{ p: 'Dolphins' },
	// 	{ p: 'Vikings' },
	// 	{ p: 'Saints' },
	// 	{ p: 'Eagles', s: 13 },
	// 	{ p: 'Steelers', s: 10 },
	// 	{ p: 'Buccaneers' },
	// 	{ p: 'Titans' },
	// 	{ p: 'Cardinals' },
	// 	{ p: 'Bills', s: 8 },
	// 	{ p: '49ers' },
	// 	{ p: 'Chiefs' },
	// 	{ p: 'Cowboys' }
	// ];
	// let playerId = 19;
	// let league = 1;
	// let week = 14;
	// let data = await makePicks(p, playerId, league, week);

	// await db.insert(picks).values(data)

	let data = (await db.select().from(games).where(eq(games.seasonType, 3))).map((game) => game.id);

	return json(data);
};
