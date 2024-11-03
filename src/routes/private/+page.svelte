<script lang="ts">
	// import { onMount } from "svelte";
	import { teams, seasonWeeks } from '$lib/espnApi';
	import type { TeamIds } from '$lib/espnApi';
	import { selectable } from '$lib/helpers.js';
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import Game from '$lib/components/game.svelte';
	import type { Selections } from '$lib/api.js';

	export let data;

	const toastStore = getToastStore();

	let { seasonData, currentYear, currentWeek, seasontype } = data;

	let weeks = seasonWeeks[seasontype];

	let selectedWeek = currentWeek;

	let spreadGames: TeamIds[] = ['5', '7', '8'];

	let gameComponents: Record<string, Game> = {};

	async function handleSubmit() {
		let gameIds = seasonData[selectedWeek].games.map((game) => game.id);
		let unselected: string[] = [];
		let selections: Selections = {};

		gameIds.forEach((id) => {
			let gameComponent = gameComponents[id];
			if (gameComponent === undefined) {
				throw new Error(`Couldn't find the component for game ${id}`)
			}
			let selected = gameComponent.selected;
			let spread = gameComponent.spread;

			if (selected === undefined || spread === undefined) {
				throw new Error(`Couldn't find the selections for game ${id}`)
			}

			if (selected === null) {
				unselected.push(gameComponents[id].name);
				return;
			}
			if (selected === '-1' || selected === '-2') {
				toastStore.trigger({
					message: "Can't pick placeholder team. Ignoring.",
					timeout: 3000,
					background: 'variant-filled-error'
				});
				return;
			}
			selections[id] = { selected, spread };
		});

		if (unselected.length > 0) {
			toastStore.trigger({
				message: `Please select a team for the following games: ${unselected.join(', ')}. Make sure you scroll to the bottom!`,
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}

		let resp = await fetch('/private/picks', {
			method: 'post',
			body: JSON.stringify({ leagueId: 1, selections })
		});
		let text = await resp.text();
		console.log(text);
	}
</script>

{#if seasonData}
	<div>
		<TabGroup justify="justify-center">
			{#each weeks as week}
				<Tab bind:group={selectedWeek} name="Week {week}" value={week}>Week {week}</Tab>
			{/each}
			{#if selectable(seasonData[selectedWeek].games[0].date)}
				<button
					on:click={handleSubmit}
					class="btn w-16 text-center rounded-lg variant-filled-surface">Submit</button
				>
			{/if}
		</TabGroup>
	</div>

	<div class="flex flex-wrap gap-x-10 gap-y-4">
		{#each seasonData[selectedWeek].games as game (game.id)}
			<!-- Make sure events are sorted chronologically -->
			<Game
				bind:this={gameComponents[game.id]}
				{game}
				isSpread={spreadGames.includes(game.home)}
				selectable={selectable(seasonData[selectedWeek].games[0].date)}
			></Game>
		{/each}
		{#if seasonData[selectedWeek].byes.length > 0}
			<div
				class="max-w-sm mx-auto mt-12 border-black rounded-lg border-dashed border-4 p-4 space-y-2 text-center"
			>
				<h1>Bye teams</h1>
				<div class="grid grid-flow-col grid-rows-2">
					{#each seasonData[selectedWeek].byes as teamId}
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
