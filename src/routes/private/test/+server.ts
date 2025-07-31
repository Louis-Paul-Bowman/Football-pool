import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';
import {
	weeksNeedingUpdate,
	getUserLeaguesData,
	updateLeagueData,
	getUniqueLeague
} from '$lib/db/funcs.server';
import { db } from '$lib/db/db.server';
import { players } from '$lib/db/schemas/players/schema';
import { and, eq, gte, lte, getTableColumns, inArray } from 'drizzle-orm';
import { getCurrentWeek } from '$lib/api';
import { games } from '$lib/db/schemas/games/schema';
import { unflattenWeeks } from '$lib/helpers';
import { leagues } from '$lib/db/schemas/leagues/schema';
import { picks } from '$lib/db/schemas/picks/schema';
import { teams, team2id } from '$lib/espnApi';
import { PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SERVICE_ROLE_KEY, DB_ADMIN_UUID } from '$env/static/private';
import lodash from 'lodash';
const { orderBy } = lodash;
import { missingPayment, missingPicks, makePicks, updateDisplayName } from '$lib/admin.server';

export const GET: RequestHandler = async ({ locals: { user } }) => {
	const whitelisted_ids = [DB_ADMIN_UUID];
	if (!user || !whitelisted_ids.includes(user.id)) {
		return error(403, 'Forbidden');
	}
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
	let league = await getUniqueLeague();
	let currentWeek = 1;
	let missing = await missingPicks(league, currentWeek);
	let unpaid = await missingPayment(league);

	let allPlayers = await db.select().from(players).where(eq(players.league, league.id));

	let good: string[] = [];
	allPlayers.forEach((player) => {
		if (!missing.includes(player.name) && !unpaid.includes(player.name)) {
			good.push(player.name);
		}
	});

	let state = { missing, unpaid, good };

	// await updateDisplayName('deb040f7-bb3c-4470-b053-1c2fd419ee06', 'Eric St.-G.');

	return json({ ok: true });
};
