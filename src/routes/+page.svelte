<script lang="ts">
	// import { onMount } from "svelte";
	import {teams, fetchScores} from "$lib/espnApi"
	import type {EspnScoreboardResponse, SeasonTypes} from "$lib/espnApi";

	export let data

	let scores: EspnScoreboardResponse = data.scores
	let week = data.week
	let dates = data.dates
	let seasontype = data.seasontype

	let previouslySelected = week
	
	const maxWeek = seasontype == 2 ? 18 : 5


	async function updateScores(dates:string,
    						  seasontype:SeasonTypes,
    						  week:number) {
		scores = await fetchScores(dates, seasontype, week)
	}


	// onMount(() =>  {
	// 	if (!scores) {
	// 		updateScores(dates, seasontype, week)
	// 	}
	// })

	

	$: {
		if (week != previouslySelected){
			previouslySelected = week;
			//Wrap fetchscores in another function to directly update
			//data variable since we can't use a top-level await here
			updateScores(dates, seasontype, week)
		}

	}

</script>
{#if scores}
	<select bind:value={week} class="text-black">
		{#each Array.from({length:maxWeek}) as _, index}
			<option value={index+1}>Week {index+1}</option>
		{/each}
	</select>
	{#each scores.events as event}
		<h1>{event.name}</h1>
		{#each event.competitions[0].competitors as competitor}
			<p>{teams[competitor.id]} ({competitor.score})</p>
		{/each}
		<p></p>
	{/each}
{/if}


