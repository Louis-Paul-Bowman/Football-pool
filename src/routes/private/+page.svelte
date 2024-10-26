<script lang="ts">
	// import { onMount } from "svelte";
	import { teams, fetchScores } from '$lib/espnApi';
	import type { EspnEvent, EspnScoreboardResponse, SeasonTypes, TeamIds } from '$lib/espnApi';
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Game from '$lib/components/game.svelte';
	

	export let data;

	let { scores, currentYear, currentWeek, seasontype, weeks } = data;

	let selectedWeek = currentWeek;
	let dates = String(currentYear);

	let spreadGames: TeamIds[] = ['5', '7', '8'];
	let byeTeams = scores[selectedWeek].week.teamsOnBye;

	$: byeTeams = scores[selectedWeek].week.teamsOnBye;
</script>

{#if scores}
	<TabGroup justify="justify-center">
		{#each weeks as week}
			<Tab bind:group={selectedWeek} name="Week {week}" value={week}>Week {week}</Tab>
		{/each}
	</TabGroup>
		

	<div class="flex flex-wrap gap-4">
		{#each scores[selectedWeek].events as event (event.id)}
			<Game
				event={event}
				isSpread={spreadGames.includes(event.competitions[0].competitors[0].id)}
			></Game>
		{/each}
	</div>
{/if}

{#if byeTeams !== undefined}
	<h1>Bye teams</h1>
	<div class="flex flex-wrap gap-4">
		{#each byeTeams as team (team.id)}
			<img
				src={`/img/logos/svg/${team.id}.svg`}
				alt="{teams[team.id]} logo"
				class="w-20 h-20 object-contain"
			/>
		{/each}
	</div>
{/if}
