<script lang="ts">
	// import { onMount } from "svelte";
	import {teams, fetchScores} from "$lib/espnApi"
	import type {EspnScoreboardResponse, SeasonTypes, TeamIds} from "$lib/espnApi";
	import Game from "$lib/components/game.svelte";

	export let data

	let scores: EspnScoreboardResponse = data.scores
	let week = data.week
	let dates = data.dates
	let seasontype = data.seasontype

	let previouslySelected = week
	
	const maxWeek = seasontype == 2 ? 18 : 5

	let spreadGames: TeamIds[] = ["2", "28", "25"]


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
	<div class="flex flex-wrap gap-4">
		{#each scores.events as event (event.id)}
			<Game homeId={event.competitions[0].competitors[0].id} 
			awayId={event.competitions[0].competitors[1].id}
			isSpread={spreadGames.includes(event.competitions[0].competitors[0].id)}></Game>
		{/each}	
	</div>	
{/if}


