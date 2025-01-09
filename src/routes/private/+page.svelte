<script lang="ts">
	// import { onMount } from "svelte";
	import { teams } from '$lib/espnApi';
	import { selectable } from '$lib/helpers.js';
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import Game from '$lib/components/game.svelte';
	import type { Selections } from '$lib/api.js';
	import { onMount } from 'svelte';

	export let data;

	const toastStore = getToastStore();

	let { league, weeks, currentWeek, baseUrl, proto } = data;

	let selectedWeek = currentWeek;
	let maxWeek = Math.min(currentWeek + 1, Math.max(...Object.keys(weeks).map(Number)));

	let spreadGames = league.spreadGames;

	let gameComponents: Record<string, Game> = {};

	async function handleSubmit() {
		let gameIds = weeks[selectedWeek].games.map((game) => game.id);
		let unselected: string[] = [];
		let badSpreads: string[] = [];
		let placeholdersSelected: string[] = [];
		let selections: Selections = {};

		gameIds.forEach((id) => {
			let gameComponent = gameComponents[id];
			if (gameComponent === undefined) {
				throw new Error(`Couldn't find the component for game ${id}`);
			}
			let selected = gameComponent.selected;
			let spread = gameComponent.spread;

			if (selected === undefined || spread === undefined) {
				throw new Error(`Couldn't find the selections for game ${id}`);
			}

			if (selected === null) {
				unselected.push(gameComponent.name);
				return;
			}
			if (selected === '-1' || selected === '-2') {
				placeholdersSelected.push(gameComponent.name)
				return;
			}
			if (gameComponent.isSpread && spread === null) {
				badSpreads.push(gameComponent.name);
				return;
			}
			selections[id] = { selected, spread };
		});

		let errorMsg: string = '';
		if (placeholdersSelected.length > 0){
			errorMsg += "Can't select placeholder teams. Please refresh the page to see if the placeholder has been updated to the actual team. "
		}

		if (unselected.length > 0 || badSpreads.length > 0) {
			if (unselected.length > 0) {
				errorMsg += `Please select a team for the following games: ${unselected.join(', ')}.`;
			}

			if (badSpreads.length > 0) {
				errorMsg += `Please select a spread for the following games: ${badSpreads.join(', ')}.`;
			}

			errorMsg += 'Make sure you scroll to the bottom!';	
		}
		if (errorMsg.length > 0 ) {
			toastStore.trigger({
				message: errorMsg,
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}

		const url = `${proto}://${baseUrl}/private/picks`;
		let resp = await fetch(url, {
			method: 'post',
			body: JSON.stringify({ leagueId: league.id, selections })
		});
		if (!resp.ok) {
			toastStore.trigger({
				message: await resp.text(),
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}
		//update client-side data
		for (const [id, update] of Object.entries(selections)) {
			weeks[selectedWeek].games = weeks[selectedWeek].games.map((game) => {
				let newGame = game;
				if (game.id === id) {
					newGame.pick = update.selected;
					newGame.spread = update.spread;
				}
				return newGame;
			});
		}
		toastStore.trigger({
			message: 'Success! Picks updated.',
			timeout: 3000,
			background: 'variant-filled-success'
		});
	}

	async function update() {
		const url = `${proto}://${baseUrl}/private/updates?leagueId=${league.id}`;
		let resp = await fetch(url);
		if (!resp.ok) {
			toastStore.trigger({
				message: await resp.text(),
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}
		({ league, weeks, currentWeek } = await resp.json());
	}

	onMount(update)

	$: maxWeek = Math.min(currentWeek + 1, Math.max(...Object.keys(weeks).map(Number)));
</script>

{#if weeks}
	<div>
		<TabGroup justify="justify-center">
			{#each Array.from({ length: maxWeek }, (_, i) => i + 1) as week}
				<Tab bind:group={selectedWeek} name={`Week ${week}`} value={week}>{week}</Tab>
			{/each}
			<div>
				<button
					on:click={async () => await update()}
					class="btn w-16 text-center rounded-lg variant-filled-secondary">Update</button
				>
				{#if selectable(weeks[selectedWeek].games[0].date)}
					<button
						on:click={async () => await handleSubmit()}
						class="btn w-16 text-center rounded-lg variant-filled-secondary">Submit</button
					>
				{/if}
			</div>
		</TabGroup>
	</div>

	<div class="flex flex-wrap gap-x-10 gap-y-4">
		{#each weeks[selectedWeek].games as game (game.id)}
			<!-- Make sure events are sorted chronologically -->
			<Game
				bind:this={gameComponents[game.id]}
				{game}
				isSpread={spreadGames.includes(game.id)}
				selectable={selectable(weeks[selectedWeek].games[0].date)}
			></Game>
		{/each}
		{#if weeks[selectedWeek].byes.length > 0}
			<div
				class="max-w-sm mx-auto mt-12 border-black rounded-lg border-dashed border-4 p-4 space-y-2 text-center"
			>
				<h1>Bye teams</h1>
				<div class="grid grid-flow-col grid-rows-2">
					{#each weeks[selectedWeek].byes as teamId}
						<img
							src={`/img/logos/svg/${teamId}.svg`}
							alt="{teams[teamId]} logo"
							class="w-20 h-20 object-contain"
						/>
					{/each}
				</div>
			</div>
		{/if}
	</div>
{/if}
