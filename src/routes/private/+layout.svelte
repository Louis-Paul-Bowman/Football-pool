<script>
	import { redirect } from '@sveltejs/kit';

	export let data;
	$: ({ supabase } = data);

	$: logout = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			console.error(error);
		}
		return redirect(303, '/auth');
	};
</script>

<header>
	<nav>
		<a href="/">Home</a>
	</nav>
	<button on:click={logout}>Logout</button>
</header>
<main>
	<slot />
</main>