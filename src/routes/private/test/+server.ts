import type { RequestHandler } from './$types';
import { db } from '$lib/db/db.server';
import { games } from '$lib/db/schema/games/schema';
import { eq } from 'drizzle-orm';
import { chronologicalSort } from '$lib/helpers';


export const GET: RequestHandler = async () => {
    let data = await db.select().from(games).where(eq(games.week, 8))
    data = chronologicalSort(data)
    console.log(data)
    return new Response();
};