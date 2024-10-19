<script lang="ts">
	import { onMount } from "svelte";
	import {teams} from "$lib/espnApi"
	import type {EspnScoreboardResponse} from "$lib/espnApi";
	const scoreURL = "http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
	
	const maxWeek = 18
	var week = "1"
	var previouslySelected = "1"
	var dates = "2024"
	var seasontype: "1" | "2" | "3" | "4" = "2"

	var data :EspnScoreboardResponse

	async function fetchScores(dates:string,
	                           seasontype:"1" | "2" | "3" | "4",
	                           week:string) {
		const params = new URLSearchParams({"dates":dates,
											"seasontype":seasontype,
											"week":week
											})
		const url = `${scoreURL}?${params}`
		const resp = await fetch(url)
		data = await resp.json()
	}

	onMount(async () => await fetchScores(dates, seasontype, week))

	$: {
		if (week != previouslySelected){
			previouslySelected = week;
			fetchScores(dates, seasontype, week)
		}

	}

</script>
{#if data}
	<select bind:value={week} class="text-black">
		{#each Array.from({length:maxWeek}) as _, index}
			<option value={String(index+1)}>Week {index+1}</option>
		{/each}
	</select>
	{#each data.events as event}
		<h1>{event.name}</h1>
		{#each event.competitions[0].competitors as competitor}
			<p>{teams[competitor.id]} ({competitor.score})</p>
		{/each}
		<p></p>
	{/each}
{/if}


