<script lang="ts">
	import { teams, type TeamIds, type EspnCompetitor, type EspnEvent, type ValidTeamIds} from '$lib/espnApi';
	import { formatDate } from "$lib/helpers";
	import {CheckIcon, XIcon} from "lucide-svelte"
	export let event: EspnEvent 
	export let isSpread: boolean;
	export let selected: TeamIds | null = null;

	const competition = event.competitions[0]
	const competitors = competition.competitors
	let gameURL: string | null = null
	event.links.forEach((link) => {
		if (link.text === "Gamecast"){
			gameURL = link.href
		}
	})
	
	if (competitors.length != 2){
		throw new Error("Invalid number of competitors");
	}
	const [comp1, comp2] = competitors
	
	const homeTeam = comp1.homeAway == "home" ? comp1 : comp2;
	const homeId = homeTeam.id
	const homeName = teams[homeTeam.id];
	const homeLogo = `/img/logos/svg/${homeId}.svg`;

	const awayTeam = comp1.homeAway == "away" ? comp1 : comp2;
	const awayId = awayTeam.id
	const awayName = teams[awayTeam.id];
	const awayLogo = `/img/logos/svg/${awayId}.svg`;

	let spread: Number | null = isSpread ? 1 : null;

	const startTime = new Date(event.date)
	const formattedStartTime = formatDate(startTime)

	let leader: TeamIds | null = null


	let awayCSS = '';
	let homeCSS = '';
	const hoverEffect = 'hover:border-green-500 hover:border-dashed hover:border-8';
	const selectedEffect = 'border-green-500 border-8';

	$: {
		leader = awayTeam.score > homeTeam.score ? awayTeam.id : homeTeam.score > awayTeam.score ? homeTeam.id : null
		awayCSS = `${hoverEffect} ${selected == awayId ? selectedEffect : 'border-transparent'} transition-colors duration-300 ${(leader !== null && leader !== awayId) ? "grayscale" : ""}`;
		homeCSS = `${hoverEffect} ${selected == homeId ? selectedEffect : 'border-transparent'} transition-colors duration-300 ${(leader !== null && leader !== homeId) ? "grayscale" : ""}`;
	}
</script>

<div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-solid border p-4 space-y-2">
	{#if gameURL !== null}
		<a class="text-lg font-medium mb-4 text-center block underline" href="{gameURL}" target="_blank" rel="noopener noreferrer">{awayName} at {homeName}</a>
	{:else}
		<p class="text-lg font-medium mb-4 text-center">{awayName} at {homeName}</p>
	{/if}
	
	<p>{formattedStartTime}</p>
	<div class="flex space-x-4 items-center justify-center text-center">
		<div>
			<button
			type="button"
			on:click={() => (selected = awayId)}
			class={awayCSS}
			aria-label="{awayName} logo"
			>
				<img src={awayLogo} alt="{awayName} logo" class="w-20 h-20 object-contain" />
			</button>
			<p>{awayTeam.score}</p>
		</div>
		
		<div>
			<button
			type="button"
			on:click={() => (selected = homeId)}
			class={homeCSS}
			aria-label="{homeName} logo"
			>
				<img src={homeLogo} alt="{homeName} logo" class="w-20 h-20 object-contain" />
			</button>
			<p>{homeTeam.score}</p>
		</div>

		
	</div>

	<div class="flex space-x-2 items-center justify-center">
		{#if isSpread}
			{#if selected !== null}
				<p>{teams[selected] }</p>
			{/if}
			<p>By</p>
			<input bind:value={spread} type="number" min="1" max="100" step="1" class="text-black" />
		{/if}
	</div>


	{#if event.status.type.completed}
	<div class="flex items-center justify-center text-center">
		{#if selected === leader}
			<CheckIcon color="green"></CheckIcon>
		{:else}
			<XIcon color="red"></XIcon>
		{/if}
	</div>
	{/if}
</div>


