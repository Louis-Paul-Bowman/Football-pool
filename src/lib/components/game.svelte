<svelte:options accessors={true} />

<script lang="ts">
	import type { games } from '$lib/db/schemas/games/schema';
	import {
		teams,
		type TeamIds,
		type EspnCompetitor,
		type EspnEvent,
		type ValidTeamIds
	} from '$lib/espnApi';
	import { formatDate } from '$lib/helpers';
	import type { PlayerLeagueData } from '$lib/api';
	import { CheckIcon, XIcon } from 'lucide-svelte';
	
	export let game: PlayerLeagueData["weeks"][number]["games"][number];
	//export this to let the submit event get the selection and to populate selections from db for prior weeks
	export let selected: TeamIds | null = game.pick;
	export let selectable: boolean = false;
	export let isSpread: boolean;

	const homeName = teams[game.home];
	const homeLogo = `/img/logos/svg/${game.home}.svg`;

	const awayName = teams[game.away];
	const awayLogo = `/img/logos/svg/${game.away}.svg`;

	//export this to let the submit event get the name to warn users if they forget to select a team
	export const name = `${awayName} at ${homeName}`;

	//export this to let the submit event get the spread
	export let spread: number | null = game.spread;

	const formattedStartTime = formatDate(game.date);

	let leader: TeamIds | null = null;

	let awayCSS = '';
	let homeCSS = '';
	const hoverEffect = 'hover:border-green-500 hover:border-dashed hover:border-8';
	const selectedEffect = 'border-green-500 border-8';

	$: {
		leader =
			game.awayScore > game.homeScore
				? game.away
				: game.homeScore > game.awayScore
					? game.home
					: null;
		awayCSS = `${selectable ? hoverEffect : ''} ${selected == game.away ? selectedEffect : 'border-transparent'} transition-colors duration-300 ${leader !== null && leader !== game.away ? 'grayscale' : ''}`;
		homeCSS = `${selectable ? hoverEffect : ''} ${selected == game.home ? selectedEffect : 'border-transparent'} transition-colors duration-300 ${leader !== null && leader !== game.home ? 'grayscale' : ''}`;
	}
</script>

<div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-solid border p-4 space-y-2">
	{#if game.link !== null}
		<a
			class="text-lg font-medium mb-4 text-center block underline"
			href={game.link}
			target="_blank"
			rel="noopener noreferrer">{awayName} at {homeName}</a
		>
	{:else}
		<p class="text-lg font-medium mb-4 text-center">{name}</p>
	{/if}

	<p>{formattedStartTime}</p>
	<div class="flex space-x-4 items-center justify-center text-center">
		<div>
			{#if selectable}
				<button type="button" on:click={() => (selected = game.away)} aria-label="{awayName} logo">
					<img src={awayLogo} alt="{awayName} logo" class="w-20 h-20 object-contain {awayCSS}" />
				</button>
			{:else}
				<img src={awayLogo} alt="{awayName} logo" class="w-20 h-20 object-contain {awayCSS}" />
			{/if}
			<p>{game.awayScore}</p>
		</div>

		<div>
			{#if selectable}
				<button type="button" on:click={() => (selected = game.home)} aria-label="{homeName} logo">
					<img src={homeLogo} alt="{homeName} logo" class="w-20 h-20 object-contain {homeCSS}" />
				</button>
			{:else}
				<img src={homeLogo} alt="{homeName} logo" class="w-20 h-20 object-contain {homeCSS}" />
			{/if}
			<p>{game.homeScore}</p>
		</div>
	</div>

	<div class="flex space-x-2 items-center justify-center">
		{#if isSpread}
			{#if selected !== null}
				<p>{teams[selected]}</p>
			{/if}
			<p>By</p>
			{#if selectable}
				<input bind:value={spread} type="number" min="1" max="100" step="1" class="text-black" />
			{:else}
				<p> {spread}</p>
			{/if}
		{/if}
	</div>

	{#if game.final}
		<div class="flex items-center justify-center text-center">
			{#if selected === leader}
				<CheckIcon color="green"></CheckIcon>
			{:else}
				<XIcon color="red"></XIcon>
			{/if}
		</div>
	{/if}
</div>
