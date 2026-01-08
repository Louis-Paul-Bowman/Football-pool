<script lang="ts">
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import { teams } from '$lib/espnApi.js';
	import { formatDate } from '$lib/helpers.js';
	import { getDisplayableWeeks, scorePlayers } from '$lib/scoring.js';
	import {
		CheckIcon,
		XIcon,
		ArrowDownAZIcon,
		ArrowDownZaIcon,
		ArrowDown01Icon,
		ArrowDown10Icon
	} from 'lucide-svelte';
	import lodash from 'lodash';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const { isEmpty } = lodash;

	export let data;

	const toastStore = getToastStore();

	let { gamePicks, weeks, currentWeek, leaguePlayers, league, baseUrl, proto } = data;
	let lastUpdated = new Date(Date.now());
	const updateTimeout = 1000 * 60;
	let intervalId: NodeJS.Timeout | null = null;
	let selectedWeek: number = currentWeek;
	let displayableWeeks = getDisplayableWeeks(weeks)
	let playersWeeklyScores = scorePlayers(leaguePlayers, displayableWeeks, gamePicks, league);
	let hiddenPlayers: number[] = [];
	const sortOptions = ['A-Z', 'Week', 'Total'] as const;
	let sort: (typeof sortOptions)[number] = 'A-Z';
	let ascending: boolean = true;
	
	// Really weird bug where subscribing to the updates 
	// in a reactive statement would run server-side even
	// with isBrowserContext = false, so move that logic
	// from reactive statement to onMount and button click.
	let isMounted = false;

	//paranoia
	function isBrowserContext() {
		return browser && typeof window !== 'undefined' && typeof document !== 'undefined' && isMounted
	}
	
	async function update() {
		// console.log("Update.")
		
		// This function crashes if we somehow try to run it server-side
		// because auth headers don't get passed in by global fetch
		// causing .json() to fail when we return the login page instead
		if (!isBrowserContext()) {
		// console.log('Update called outside browser context, skipping...');
		return;
		}

		const url = `${proto}://${baseUrl}/private/updates?leagueId=${league.id}`;

		let resp = await fetch(url);
		if (!resp.ok) {
			toastStore.trigger({
				message: await resp.text(),
				timeout: 15000,
				background: 'variant-filled-error'
			});
			return;
		}
		({ gamePicks, weeks, currentWeek, leaguePlayers, league } = await resp.json());
		displayableWeeks = getDisplayableWeeks(weeks)
		lastUpdated = new Date(Date.now());
		playersWeeklyScores = scorePlayers(leaguePlayers, displayableWeeks, gamePicks, league);
	}

	function anyActiveGames() {
		let weeksHaveActiveGames = Object.values(weeks).map((week) => {
			return week.games.some((game) => game.active);
		});

		return weeksHaveActiveGames.some((active) => active);
	}

	function cycleSort() {
		sort =
			sortOptions[(sortOptions.findIndex((option) => sort === option) + 1) % sortOptions.length];
	}

	function sortLeaguePlayersByAlphabeticalName(ascending: boolean = true): void {
		leaguePlayers.sort((a, b) => {
			if (!a.name || !b.name) {
				return 0; // Handle undefined/null names
			}

			// Sort case-insensitively
			const result = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
			return ascending ? result : -result;
		});
	}

	function sortLeaguePlayersByScore(
		kind: 'week' | 'cumulative',
		selectedWeek: number,
		ascending: boolean = true
	): void {
		leaguePlayers.sort((a, b) => {
			const scoreA = playersWeeklyScores[a.id][selectedWeek][kind];
			const scoreB = playersWeeklyScores[b.id][selectedWeek][kind];

			const result = scoreA - scoreB;
			return ascending ? result : -result;
		});
	}

	function trySubscribe() {
		if (isBrowserContext() && intervalId === null && anyActiveGames()) {
			// if (isBrowserContext() && intervalId === null ) {

			// console.log("Subscribe.")
			intervalId = setInterval(update, updateTimeout);
		}
	}

	
	onMount(() => {
		isMounted = true
		trySubscribe()
		update()
	})

	$: {
		if (sort === 'A-Z') {
			sortLeaguePlayersByAlphabeticalName(ascending);
		} else if (sort === 'Week') {
			sortLeaguePlayersByScore('week', selectedWeek, ascending);
		} else if (sort === 'Total') {
			sortLeaguePlayersByScore('cumulative', selectedWeek, ascending);
		}
		// sort is inplace but need to re-assign to trigger re-render
		leaguePlayers = leaguePlayers;
	}


	$: {
		if (intervalId !== null && !anyActiveGames()) {
			console.log("Unsubscribe.")
			clearInterval(intervalId);
			intervalId = null;
		}
	}
</script>

<style>
	/* Using the skeleton / TW table style seems to invalidate just adding "p-0" so gotta do it like this */
	.no-padding {
	  padding: 2px; 
	}
  </style>

{#if !isEmpty(displayableWeeks)}
	<div>
		<TabGroup justify="justify-center">
			{#each Object.keys(displayableWeeks) as week}
				<Tab bind:group={selectedWeek} name={week} value={Number(week)}>{week}</Tab>
			{/each}
			<div>
				<button
					on:click={async () => {
						trySubscribe()
						await update()
					}}
					class="btn w-16 text-center rounded-lg variant-filled-secondary">Update</button
				>
			</div>
		</TabGroup>
	</div>

	<div>
		<p>Updated: {formatDate(lastUpdated)}</p>
	</div>

	<div class="table-container overflow-x-auto">
		<table class="table table-hover text-center min-w-full">
			<thead>
				<tr>
					<th>
						<div
							class="grid grid-colums-1 items-center justify-center space-y-2 place-items-center"
						>
							<div class="flex items-center align-middle">
								<button
									class="btn w-fit text-center rounded-lg variant-filled-secondary"
									on:click={cycleSort}>{sort}</button
								>
								<button on:click={() => (ascending = !ascending)}>
									{#if sort === 'A-Z'}
										{#if ascending}
											<ArrowDownAZIcon></ArrowDownAZIcon>
										{:else}
											<ArrowDownZaIcon></ArrowDownZaIcon>
										{/if}
									{:else if ['Week', 'Total'].includes(sort)}
										{#if ascending}
											<ArrowDown01Icon></ArrowDown01Icon>
										{:else}
											<ArrowDown10Icon></ArrowDown10Icon>
										{/if}
									{/if}
								</button>
							</div>
							<button
								class="btn w-full text-center rounded-lg variant-filled-secondary"
								on:click={() => (hiddenPlayers = [])}>Reset</button
							>
						</div>
					</th>
					{#each weeks[selectedWeek].games as game (game.id)}
						<!-- <th>{getTitle(game)}</th> -->
						<th class="no-padding">
							<div class="flex flex-col space-y-2 items-center justify-center text-center">
								<img
									src="/img/logos/svg/{game.away}.svg"
									alt="{teams[game.away]} logo"
									class="w-10 h-10"
								/>
								<p>at</p>
								<img
									src="/img/logos/svg/{game.home}.svg"
									alt="{teams[game.home]} logo"
									class="w-10 h-10"
								/>
							</div>
						</th>
					{/each}
					<th class="text-center">Week</th>
					<th class="text-center">Total</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th class="text-center">Result</th>
					{#each weeks[selectedWeek].games as game (game.id)}
						<th>
							<div>
								<!-- {#if game.active && !game.final}
									{#if game.homeScore > game.awayScore}
										<p>Leading:</p>
										<div class="flex items-center justify-center">
											<img src="/img/logos/svg/{game.home}.svg" alt="{teams[game.home]} logo" class="w-10 h-10">
											<p>({game.homeScore - game.awayScore})</p>
										</div>
									{:else if game.awayScore > game.homeScore}
										<p>Leading:</p>
										<div class="flex items-center justify-center">
											<img src="/img/logos/svg/{game.away}.svg" alt="{teams[game.away]} logo" class="w-10 h-10">
											<p>({game.awayScore - game.homeScore})</p>
										</div>
									{:else}
										<p>Tied.</p>
									{/if} -->
								{#if game.active || game.final}
									{#if game.homeScore > game.awayScore}
										<!-- <p>Winner:</p> -->
										<div class="flex items-center justify-center">
											<img
												src="/img/logos/svg/{game.home}.svg"
												alt="{teams[game.home]} logo"
												class="w-10 h-10"
											/>
										</div>
										{#if game.active}
											<p>Leading (+{game.homeScore - game.awayScore})</p>
										{:else}
											<p>
												Final {league.spreadGames.includes(game.id)
													? `(+${game.homeScore - game.awayScore})`
													: ''}
											</p>
										{/if}
									{:else if game.awayScore > game.homeScore}
										<!-- <p>Winner:</p> -->
										<div class="flex items-center justify-center">
											<img
												src="/img/logos/svg/{game.away}.svg"
												alt="{teams[game.away]} logo"
												class="w-10 h-10"
											/>
										</div>
										{#if game.active}
											<p>Leading (+{game.awayScore - game.homeScore})</p>
										{:else}
											<p>
												Final {league.spreadGames.includes(game.id)
													? `(+${game.awayScore - game.homeScore})`
													: ''}
											</p>
										{/if}
									{:else}
										<p>Tied ({game.homeScore}-{game.awayScore}).</p>
									{/if}
								{:else}
									<p></p>
								{/if}
							</div>
						</th>
					{/each}
					<th></th>
					<th></th>
				</tr>
				{#each leaguePlayers as player}
					{#if !hiddenPlayers.includes(player.id)}
						<tr>
							<th>
								<div class="flex gap-x-2 items-center justify-center">
									<button on:click={() => (hiddenPlayers = [...hiddenPlayers, player.id])}>
										<XIcon size={20} class="border border-black variant-ringed-secondary" />
									</button>
									<p>{player.name}</p>
								</div>
							</th>
							{#each weeks[selectedWeek].games as game (game.id)}
								<!-- <td>{gamePicks[game.id].find((pick) => pick.playerId === player.id)?.pick}</td> -->
								<td>
									<div class="flex flex-col items-center justify-center space-y-1">
										<div class="flex items-center justify-center">
											{#if gamePicks[game.id][player.id] !== undefined && gamePicks[game.id][player.id].pick !== undefined}
												<img
													src="/img/logos/svg/{gamePicks[game.id][player.id].pick}.svg"
													alt="{teams[gamePicks[game.id][player.id].pick]} logo"
													class="w-8 h-8 mr-1"
												/>
											{/if}

											{#if gamePicks[game.id][player.id] !== undefined && gamePicks[game.id][player.id].spread}
												<p class="text-sm">({gamePicks[game.id][player.id].spread})</p>
											{/if}
										</div>

										{#if game.active || game.final}
											<div class="flex items-center justify-center">
												{#if playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] === 0}
													<XIcon size={24} color="red" />
													{#if league.spreadGames.includes(game.id)}
														<span class="ml-1 text-xs">(+0)</span>
													{/if}
												{:else}
													<CheckIcon size={24} color="green" />
													{#if league.spreadGames.includes(game.id)}
														<span class="ml-1 text-xs"
															>(+{playersWeeklyScores[player.id][selectedWeek].gamesScores[
																game.id
															] - 1})</span
														>
													{/if}
												{/if}
											</div>
										{/if}
									</div>
								</td>
							{/each}
							<td>{playersWeeklyScores[player.id][selectedWeek].week}</td>
							<td>{playersWeeklyScores[player.id][selectedWeek].cumulative}</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<h1>No picks are available to show yet. Come back later!</h1>
{/if}
