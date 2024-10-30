import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { getFullSeasonData } from '$lib/db/funcs.server';


export const GET: RequestHandler = async () => {
    let data = await getFullSeasonData(2)
    return json(data)
};