<script lang="ts">
	// import { onMount } from "svelte";
	import { teams, seasonWeeks } from '$lib/espnApi';
	import type { TeamIds } from '$lib/espnApi';
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import Game from '$lib/components/game.svelte';

	export let data;

	const toastStore = getToastStore();

	let { seasonData, currentYear, currentWeek, seasontype } = data;

	let weeks = seasonWeeks[seasontype];

	let selectedWeek = currentWeek;

	let spreadGames: TeamIds[] = ['5', '7', '8'];
	let byeTeams = seasonData[selectedWeek].byes;

	let gameComponents: Record<string, Game> = {};

	function selectable(weekStart: string | Date): boolean {
		let now = new Date(Date.now());
		let cutoffTime = typeof weekStart === 'string' ? new Date(weekStart) : weekStart;
		cutoffTime.setHours(cutoffTime.getHours() - 2);
		return now < cutoffTime;
	}

	$: byeTeams = seasonData[selectedWeek].byes;

	function handleSubmit() {
		let gameIds = seasonData[selectedWeek].games.map((game) => game.id);
		const selections = gameIds.map((id) => ({
			eventId: id,
			selected: gameComponents[id].selected,
			spread: gameComponents[id].spread
		}));

		let unselected: string[] = [];

		selections.forEach((selection) => {
			if (selection.selected === null) {
				unselected.push(gameComponents[selection.eventId].name);
			}
		});

		if (unselected.length > 0) {
			toastStore.trigger({
				message: `Please select a team for the following games: ${unselected.join(', ')}. Make sure you scroll to the bottom!`,
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}

		toastStore.trigger({
			message: `${'Success!'}`,
			timeout: 3000,
			background: 'variant-filled-success'
		});
		console.log(selections);
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
				selectable={selectable(game.date)}
			></Game>
		{/each}
		{#if byeTeams.length > 0}
			<div
				class="max-w-sm mx-auto mt-12 border-black rounded-lg border-dashed border-4 p-4 space-y-2 text-center"
			>
				<h1>Bye teams</h1>
				<div class="grid grid-flow-col grid-rows-2">
					{#each byeTeams as teamId}
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
