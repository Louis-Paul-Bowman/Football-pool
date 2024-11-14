<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { initializeStores, Toast } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	//Supabase and auth
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();

	const avatarImg = '/img/avatar/jacoby.jpg';

	$: ({ session, supabase } = data);

	// the official supabase auth guide docs have a bug that logs a warning
	// https://supabase.com/docs/guides/auth/server-side/sveltekit
	// See https://github.com/supabase/auth-js/issues/888
	// a hook has been added to suppress it
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Toast />
<!-- App Shell -->
<AppShell scrollbarGutter="stable">
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="px-4 py-2">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Football</strong>
			</svelte:fragment>
			<svelte:fragment>
				<div class="flex-grow flex items-center justify-center">
					<div class="flex items-center justify-center gap-x-8">
						<a href="/private">Picks</a>
						<a href="/private/scoreboard">Scoreboard</a>
					</div>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				{#if data.user !== null}
					<p>{data.user.user_metadata.display_name}</p>
					<Avatar src={avatarImg}></Avatar>
					<form class="" method="post" action="/?/logout">
						<button class="btn w-16 text-center rounded-lg variant-outline-surface">Logout</button>
					</form>
					<!-- {:else}
					<a class="btn w-16 text-center rounded-lg variant-outline-surface" href="/auth">Login</a> -->
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
