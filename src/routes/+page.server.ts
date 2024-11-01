import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (() => {
	return redirect(303, '/auth');
}) satisfies PageServerLoad;

export const actions: Actions = {
	logout: async ({ locals: { supabase } }) => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		return redirect(303, '/');
	}
};
