<script lang="ts">
	// import { onMount } from "svelte";
	import { teams } from '$lib/espnApi';
	import type { TeamIds } from '$lib/espnApi';
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import Game from '$lib/components/game.svelte';

	export let data;

	const toastStore = getToastStore();

	let { scores, currentYear, currentWeek, seasontype, weeks } = data;

	let selectedWeek = currentWeek;

	let spreadGames: TeamIds[] = ['5', '7', '8'];
	let byeTeams = scores[selectedWeek].week.teamsOnBye;

	let gameComponents: Record<string, Game> = {};
	

	function selectable(weekStart:string): boolean {
		let now = new Date(Date.now())
		let cutoffTime = new Date(weekStart)
		cutoffTime.setHours(cutoffTime.getHours() - 2)
		return now < cutoffTime
	}

	$: byeTeams = scores[selectedWeek].week.teamsOnBye;

	function handleSubmit() {
		let gameIds = scores[selectedWeek].events.map((event) => (event.id));
		const selections = gameIds.map((id) => ({
			eventId: id,
			selected: gameComponents[id].selected,
			spread: gameComponents[id].spread
		}));

		let unselected: string[] = []

		selections.forEach((selection) => {
			if (selection.selected === null) {
				unselected.push(gameComponents[selection.eventId].name)
			}
		})

		if (unselected.length > 0){
			toastStore.trigger({message: `Please select a team for the following games: ${unselected.join(", ")}`,
			timeout: 5000,
			background: 'variant-filled-error'
		})
		return
		}

		toastStore.trigger({
			message: `${"Success!"}`,
			timeout: 3000,
			background: 'variant-filled-success'
		});
		console.log(selections)
	}
		

</script>

{#if scores}
	<div>
	<TabGroup justify="justify-center">
		{#each weeks as week}
			<Tab bind:group={selectedWeek} name="Week {week}" value={week}>Week {week}</Tab>
		{/each}
		{#if selectable(scores[selectedWeek].events[0].date)}
			<button on:click={handleSubmit} class="btn w-16 text-center rounded-lg variant-filled-surface">Submit</button>
		{/if}
	</TabGroup>
	
	</div>

		
	

	<div class="flex flex-wrap gap-x-10 gap-y-4">
		{#each scores[selectedWeek].events as event (event.id)}
			<!-- Make sure events are sorted chronologically -->
			<Game
				bind:this={gameComponents[event.id]}
				event={event}
				isSpread={spreadGames.includes(event.competitions[0].competitors[0].id)}
				selectable={selectable(scores[selectedWeek].events[0].date)} 
			></Game>
		{/each}
		{#if byeTeams !== undefined}
			<div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-dashed border-4 p-4 space-y-2 text-center">
				<h1>Bye teams</h1>
				<div class="grid grid-flow-col grid-rows-2">
					{#each byeTeams as team (team.id)}
					<img
						src={`/img/logos/svg/${team.id}.svg`}
						alt="{teams[team.id]} logo"
						class="w-20 h-20 object-contain"
					/>
					{/each}
				</div>
				
			</div>
{/if}
	</div>
{/if}


