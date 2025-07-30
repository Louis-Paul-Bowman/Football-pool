import { db } from './db/db.server';
import { picks } from './db/schemas/picks/+schema';
import { games } from './db/schemas/games/schema';
import { leagues } from './db/schemas/leagues/+schema';
import { players } from './db/schemas/players/+schema';
import { team2id } from './espnApi';
import { eq, inArray, and } from 'drizzle-orm';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SERVICE_ROLE_KEY } from '$env/static/private';

export const adminClient = createClient(PUBLIC_SUPABASE_URL, SERVICE_ROLE_KEY, {
	auth: {
		autoRefreshToken: false,
		persistSession: false
	}
});

export async function makePicks(
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

export async function missingPicks(league: typeof leagues.$inferSelect, week: number) {
	let registered = await db.select().from(players).where(eq(players.league, league.id));
	let allGames = await db
		.select()
		.from(games)
		.where(
			and(
				eq(games.week, week),
				eq(games.seasonType, league.seasonType),
				eq(games.year, league.year)
			)
		);

	let gameIds = allGames.map((g) => g.id);
	let allPicks = await db.select().from(picks).where(inArray(picks.gameId, gameIds));

	let missing: string[] = [];

	registered.forEach((player) => {
		let count = 0;
		allPicks.forEach((pick) => {
			if (pick.playerId === player.id) {
				count++;
			}
		});
		if (count !== gameIds.length) {
			missing.push(player.name);
		}
	});
	return missing;
}

export async function missingPayment(league: typeof leagues.$inferSelect) {
	let unpaidPlayers = await db
		.select()
		.from(players)
		.where(and(eq(players.league, league.id), eq(players.paid, false)));
	let names = unpaidPlayers.map((player) => player.name);
	return names;
}

export async function getAllEmails(league: typeof leagues.$inferSelect) {
	let registered = await db.select().from(players).where(eq(players.league, league.id));
	let accountIds = registered.map((u) => u.accountUUID);
	console.log(accountIds);

	let userInfos = await Promise.all(
		accountIds.map(async (id) => {
			return (await adminClient.auth.admin.getUserById(id)).data.user;
		})
	);

	return userInfos.map((u) => u?.email);
}
