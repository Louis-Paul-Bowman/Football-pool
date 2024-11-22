import { redirect } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			console.error(error);
			return { success: false, reason: error.message };
		} else {
			redirect(303, '/private');
		}
	},
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const data = {
			display_name: formData.get('displayName') as string
		};
		const options = { data };

		const { error } = await supabase.auth.signUp({ email, password, options });
		if (error) {
			console.error(error);
			return { success: false, reason: error.message };
		} else {
			return {
				success: true,
				reason: `An email has been sent to ${email} to validate your account.`
			};
		}
	}
};
