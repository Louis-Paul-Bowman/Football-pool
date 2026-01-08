import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import {
	weeksNeedingUpdate,
	getUserLeaguesData,
	updateLeagueData,
	getUniqueLeague,
	getUpdates,
	updateMultipleGames,
	getGamePicks
} from '$lib/db/funcs.server';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/schema';
import { and, eq, gte, lte, getTableColumns, inArray } from 'drizzle-orm';
import { getCurrentWeek } from '$lib/api';
import { games, games } from '$lib/db/schemas/games/schema';
import { unflattenWeeks } from '$lib/helpers';
import { leagues } from '$lib/db/schemas/leagues/schema';
import { picks } from '$lib/db/schemas/picks/schema';
import { teams, team2id } from '$lib/espnApi';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SERVICE_ROLE_KEY, DB_ADMIN_UUID } from '$env/static/private';
import lodash from 'lodash';
const { orderBy } = lodash;
import {
	missingPayment,
	missingPicks,
	makePicks,
	updateDisplayName,
	getAllEmails
} from '$lib/admin.server';
import { getDisplayableWeeks, scorePlayers } from '$lib/scoring';
import type { User } from '@supabase/supabase-js';

async function scores(user: User) {
	let league = await getUniqueLeague();
	let leaguePlayers = await db
		.select({ id: players.id, name: players.name })
		.from(players)
		.where(eq(players.league, league.id));

	let playerNames: Record<number, string> = {};
	leaguePlayers.forEach((player) => {
		playerNames[player.id] = player.name;
	});
	let playerLeagueData = (await getUserLeaguesData(user, 0, false))[0];
	let weeks = playerLeagueData.weeks;
	let gamePicks = await getGamePicks(league, weeks);
	let displayableWeeks = getDisplayableWeeks(weeks);
	let playerScores = scorePlayers(leaguePlayers, displayableWeeks, gamePicks, league);
	let namedPlayerScores: any = {};
	for (const [key, value] of Object.entries(playerScores)) {
		namedPlayerScores[playerNames[Number(key)]] = value;
	}
	return namedPlayerScores;
}

export const GET: RequestHandler = async ({ locals: { user } }) => {
	const whitelisted_ids = [DB_ADMIN_UUID];
	if (!user || !whitelisted_ids.includes(user.id)) {
		return error(403, 'Forbidden');
	}

	// let league2 = (await db.select().from(leagues).where(eq(leagues.id, 2)))[0];
	// let emails = await getAllEmails(league2);
	// return json(emails);

	// let p: { p: keyof typeof team2id; s?: number }[] = [

	// 	{ p: 'Broncos'},
	// 	{ p: 'Steelers' },
	// 	{ p: 'Buccaneers', s: 7 },
	// 	{ p: 'Saints' },
	// 	{ p: 'Jaguars' },
	// 	{ p: 'Patriots' },
	// 	{ p: 'Bengals' },
	// 	{ p: 'Seahawks', s: 10 },
	// 	{ p: 'Raiders', s: 7 },
	// 	{ p: 'Bills' },
	// 	{ p: '49ers' },
	// 	{ p: 'Rams' }
	// ];
	// let playerId = 85;
	// let league = (await db.select().from(leagues).where(eq(leagues.id, 4)))[0];
	// let week = 17;

	// let data = await makePicks(p, playerId, league, week);
	// await db.insert(picks).values(data);

	// const supabase = createClient(PUBLIC_SUPABASE_URL, SERVICE_ROLE_KEY, {
	// 	auth: {
	// 		autoRefreshToken: false,
	// 		persistSession: false
	// 	}
	// });

	// let registered = await db.select().from(players).where(eq(players.league, 2));

	// let infos = await Promise.all(
	// 	ids.map(async (id) => {
	// 		return (await supabase.auth.admin.getUserById(id)).data.user;
	// 	})
	// );
	// registered = orderBy(registered, ['name'], ['asc']);
	// let names = registered.map((u) => u.name);

	// let league = await getUniqueLeague();
	// let currentWeek = 18;
	// console.log(currentWeek);
	// let missing = await missingPicks(league, currentWeek);
	// let unpaid = await missingPayment(league);

	// let allPlayers = await db.select().from(players).where(eq(players.league, league.id));

	// let allNames = orderBy(allPlayers, (p) => p.name).map((p) => p.name);

	// let good: string[] = [];
	// allPlayers.forEach((player) => {
	// 	if (!missing.includes(player.name) && !unpaid.includes(player.name)) {
	// 		good.push(player.name);
	// 	}
	// });

	// let emails = await getAllEmails(league);

	// let state = missing;

	// await updateDisplayName('911c76e0-5608-47cd-b5d5-20f238a8ed6f', 'MelE In The Middle');

	// //Apply updates to DB
	// let league = (await db.select().from(leagues).where(eq(leagues.id, 5)))[0];
	// let weeksToUpdate = [1, 2, 3, 4, 5];
	// let updates = await getUpdates(league, weeksToUpdate);
	// let affected = await updateMultipleGames(updates.flat());
	// return json(affected);

	let league = (await db.select().from(leagues).where(eq(leagues.id, 5)))[0];
	let gamesData = await db
		.select()
		.from(games)
		.where(and(gte(games.date, league.start), lte(games.date, league.end)));

	let gameIds = gamesData.map((game) => game.id);
	return json(gameIds);

	// return json(await scores(user));

	// return json(state);
	// return json(data);
};
