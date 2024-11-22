import {  error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { EmailOtpType } from '@supabase/supabase-js';



export const load = (async ({ url, locals: { supabase } }) => {
	const token_hash = url.searchParams.get('token_hash');
	const type = url.searchParams.get('type') as EmailOtpType | null;
	// const email = url.searchParams.get('email')

	// if (!email){
	// 	return error(403, "Forbidden")
	// }


	if (token_hash && type) {
		const { error } = await supabase.auth.verifyOtp({ type, token_hash });
		if (!error) {
			return {}
		}
		console.log(error)
	}

	return error(403, "Forbidden")
}) satisfies PageServerLoad;
