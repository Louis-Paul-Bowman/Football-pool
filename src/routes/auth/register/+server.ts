import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals: { supabase, user } }) => {
	if (!user) {
		return error(401, 'Unauthenticated');
	}

	const reqData = await request.json();
	const password: string | undefined = reqData.password;
	const displayName: string | undefined = reqData.displayName;
	const data = {
		display_name: displayName
	};

	if (!password || !displayName || displayName.length === 0 || password.length === 0) {
		return error(400, 'Please choose a password and display name.');
	}

	const resp = await supabase.auth.updateUser({
		password,
		data
	});

	if (resp.error) {
		console.error(resp.error);
		return error(400, resp.error.message);
	}

	await supabase.auth.signOut();

	return new Response('Ok.');
};
