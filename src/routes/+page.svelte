<script lang="ts">
	// import { onMount } from "svelte";
	import { teams, fetchScores } from '$lib/espnApi';
	import type { EspnEvent, EspnScoreboardResponse, SeasonTypes, TeamIds } from '$lib/espnApi';
	import Game from '$lib/components/game.svelte';

	export let data;

	let { scores, currentYear, currentWeek, seasontype, weeks } = data;

	let week = currentWeek;
	let dates = String(currentYear);

	let spreadGames: TeamIds[] = ['5', '7', '8'];
	let byeTeams = scores[week].week.teamsOnBye;

	$: byeTeams = scores[week].week.teamsOnBye;
</script>

{#if scores}
	<select bind:value={week} class="text-black">
		{#each weeks as week}
			<option value={week}>Week {week}</option>
		{/each}
	</select>

	<div class="flex flex-wrap gap-4">
		{#each scores[week].events as event (event.id)}
			<Game
				homeId={event.competitions[0].competitors[0].id}
				awayId={event.competitions[0].competitors[1].id}
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
