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

	let darkMode = data.darkMode;
	let currentTheme = data.theme;

	const themes = [
		'crimson',
		'gold-nouveau',
		'hamlindigo',
		'modern',
		'rocket',
		'sahara',
		'seafoam',
		'skeleton',
		'vintage',
		'wintry',
		'bills'
	];
	
	const pfps = [
		'jacoby.jpg',
		'kermit_mahomes.jfif',
		'peyton_balaclava.jpeg',
		'aaron_concussion.jpg',
		'mcdaniel_sad.webp',
		"brady_rings.jpg",
		// "brady_goat.webp",
		"taylor.jpg",
		"josh_potato.png"
	];
	let avatar = data.avatar !== null && pfps.includes(data.avatar) ? data.avatar : pfps[0];

	function cycleProfilePicture() {
		let avatarInd = pfps.findIndex((pfp) => pfp === avatar);
		avatar = pfps[(avatarInd + 1) % pfps.length];
		document.cookie = `avatar=${avatar};max-age=31536000;path="/"`;
	}

	function toggleDarkMode() {
		darkMode = !darkMode;
		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
		document.cookie = `darkMode=${darkMode};max-age=31536000;path="/"`;
	}

	function cycleTheme() {
		const index = themes.indexOf(currentTheme);
		currentTheme = themes[(index + 1) % themes.length];
		document.cookie = `theme=${currentTheme};max-age=31536000;path="/"`;
		document.documentElement.setAttribute('data-theme', currentTheme);
	}

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

<body data-sveltekit-preload-data="hover" data-theme={currentTheme}>
	<Toast />
	<!-- App Shell -->
	<AppShell scrollbarGutter="stable" data-theme={currentTheme}>
		<svelte:fragment slot="header">
			<div class="px-4 py-2 flex flex-wrap justify-between items-center bg-surface-100-800-token">
				<div class="flex flex-wrap max-w-1/3">
					<div class="flex space-x-3 items-center">
						<!-- <strong class="text-xl uppercase">Football</strong> -->
						<button class="btn btn-sm variant-ghost-surface" on:click={toggleDarkMode}>
							{#if darkMode}
								<svg viewBox="0 0 24 24" class="w-6 h-6">
									<path
									fill="currentColor"
									d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
									></path>
								</svg>
							{:else}
								<svg viewBox="0 0 24 24" class="w-6 h-6">
									<path
									fill="currentColor"
									d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z">
									</path>
								</svg>
							{/if}
						</button>
						<button class="btn btn-sm variant-ghost-surface" on:click={cycleTheme}>
								Theme
						</button>
					</div>
				</div>
				<div class="flex flex-wrap max-w-1/3">
					{#if data.user !== null}
						<div class="flex-grow flex items-center justify-center">
							<div class="flex items-center justify-center gap-x-8">
								<a href="/private">Picks</a>
								<a href="/private/scoreboard">Scoreboard</a>
							</div>
						</div>
					{/if}
				</div>
				<div class="flex flex-wrap max-w-1/3">
					<div class="flex-grow flex items-center justify-end space-x-3">
					{#if data.user !== null}
						<p>{data.user.user_metadata.display_name ?? 'No display name set.'}</p>
						<button on:click={cycleProfilePicture}>
							<Avatar src={`/img/avatar/${avatar}`}></Avatar>
						</button>
						<form class="" method="post" action="/?/logout">
							<button class="btn w-16 text-center rounded-lg variant-outline-surface">Logout</button>
						</form>
						<!-- {:else}
						<a class="btn w-16 text-center rounded-lg variant-outline-surface" href="/auth">Login</a> -->
					{/if}
					</div>
				</div>
			</div>
		</svelte:fragment>
		<!-- Page Route Content -->
		<slot />
	</AppShell>
</body>