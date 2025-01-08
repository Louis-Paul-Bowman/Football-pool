import { redirect } from '@sveltejs/kit';
import { enablePublicSignup } from '$lib/globals';

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
		if (!enablePublicSignup) {
			return { success: false, reason: 'Public signup is currently disabled.' };
		}
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const confirm = formData.get('confirm') as string;
		const data = {
			display_name: formData.get('displayName') as string
		};
		const options = { data };

		if (!data.display_name || data.display_name.length === 0) {
			return { success: false, reason: 'Must set a display name.' };
		}

		if (!password || password.length === 0) {
			return { success: false, reason: 'Must set a password.' };
		}

		if (password !== confirm) {
			return { success: false, reason: 'Password and confirmation do not match.' };
		}

		const resp = await supabase.auth.signUp({ email, password, options });
		if (resp.error) {
			console.error(resp.error);
			return { success: false, reason: resp.error.message };
		}

		// Check if the user already exists
		if (resp.data.user && resp.data.user.identities && resp.data.user.identities.length === 0) {
			// User already exists and is confirmed
			return { success: false, reason: 'User already exists. Please log in.' };
		}

		// New user created or existing unconfirmed user
		return {
			success: true,
			reason: `An email has been sent to ${email} to validate your account.`
		};
	}
};
