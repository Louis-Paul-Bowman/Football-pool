<script lang="ts">
	import { browser } from '$app/environment';
	import { TabGroup, Tab, getToastStore } from '@skeletonlabs/skeleton';
	import { teams } from '$lib/espnApi.js';
	import { formatDate, selectable } from '$lib/helpers.js';
	import { CheckIcon, XIcon } from 'lucide-svelte';

	export let data;

	const toastStore = getToastStore();

	let { gamePicks, weeks, currentWeek, leaguePlayers, league } = data;
	let lastUpdated = new Date(Date.now());
	const updateTimeout = 1000 * 60;
	let selectedWeek: number = currentWeek;
	let displayableWeeks: typeof weeks = {};
	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (!selectable(weekData.games[0].date)) {
			displayableWeeks[Number(weekNum)] = weekData;
			selectedWeek = Number(weekNum);
		}
	}
	let playersWeeklyScores = scorePlayers();

	function getGameResult(game: (typeof weeks)[number]['games'][number]) {
		let winner =
			game.homeScore > game.awayScore
				? game.home
				: game.awayScore > game.homeScore
					? game.away
					: null;
		let spread = Math.abs(game.homeScore - game.awayScore);
		return { winner, spread };
	}

	type PlayersWeeklyScores = Record<
		string,
		Record<number, { gamesScores: Record<string, number>; week: number; cumulative: number }>
	>;

	function scorePlayers() {
		let playersWeeklyScores: PlayersWeeklyScores = {};
		leaguePlayers.forEach((player) => {
			playersWeeklyScores[player.id] = {};
			let cumulative = 0;
			for (const [weekNum, weekData] of Object.entries(displayableWeeks)) {
				let gamesScores: Record<string, number> = {};
				let weekScore = 0;
				weekData.games.forEach((game) => {
					let gameScore = scoreGame(game, gamePicks[game.id][player.id]);
					gamesScores[game.id] = gameScore;
					weekScore += gameScore;
					cumulative += gameScore;
				});
				playersWeeklyScores[player.id][Number(weekNum)] = {
					gamesScores,
					week: weekScore,
					cumulative: cumulative
				};
			}
		});
		return playersWeeklyScores;
	}

	function scoreGame(
		game: (typeof weeks)[number]['games'][number],
		pick: (typeof gamePicks)[string][number] | undefined
	) {
		// Player didn't make a pick
		if (pick === undefined) {
			return 0;
		}
		let { winner, spread } = getGameResult(game);

		//Tie game
		if (winner === null) {
			return 0;
		}

		//Not a spread game
		if (!league.spreadGames.includes(game.id)) {
			return pick.pick === winner ? 1 : 0;
		}

		return pick.pick === winner ? 1 + scoreSpread(spread, pick.spread) : 0;
	}

	function scoreSpread(gameSpread: number, selectedSpread: number | null) {
		//Player didn't select a spread
		if (selectedSpread === null) {
			return 0;
		}
		let diff = Math.abs(gameSpread - selectedSpread);
		if (diff === 0) {
			return 7;
		}
		if (diff <= 4) {
			return 3;
		}
		if (diff <= 9) {
			return 2;
		}
		if (diff <= 20) {
			return 1;
		}
		return 0;
	}

	async function update() {
		// console.log("Update.")

		let url = `/private/updates?leagueId=${league.id}`;

		// Needed for setInterval for whatever reason
		if (browser) {
			url = `${window.location.origin}${url}`;
		}

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
		lastUpdated = new Date(Date.now());
		displayableWeeks = {};
		for (const [weekNum, weekData] of Object.entries(weeks)) {
			if (!selectable(weekData.games[0].date)) {
				displayableWeeks[Number(weekNum)] = weekData;
			}
		}
		playersWeeklyScores = scorePlayers();
	}

	function anyActiveGames() {
		let weeksHaveActiveGames = Object.values(weeks).map((week) => {
			return week.games.some((game) => game.active);
		});

		return weeksHaveActiveGames.some((active) => active);
	}

	let intervalId: NodeJS.Timeout | null = null;

	$: {
		if (intervalId === null && anyActiveGames()) {
			// console.log("Subscribe.")
			intervalId = setInterval(update, updateTimeout);
		}
	}

	$: {
		if (intervalId !== null && !anyActiveGames()) {
			// console.log("Unsubscribe.")
			clearInterval(intervalId);
			intervalId = null;
		}
	}
</script>

{#if weeks}
	<div>
		<TabGroup justify="justify-center">
			{#each Object.keys(displayableWeeks) as week}
				<Tab bind:group={selectedWeek} name={week} value={Number(week)}>{week}</Tab>
			{/each}
			<div>
				<button
					on:click={async () => await update()}
					class="btn w-16 text-center rounded-lg variant-filled-surface">Update</button
				>
			</div>
		</TabGroup>
	</div>

	<div>
		<p>Updated: {formatDate(lastUpdated)}</p>
	</div>

	<div class="table-container">
		<table class="table table-hover text-center">
			<thead>
				<tr>
					<th></th>
					{#each weeks[selectedWeek].games as game (game.id)}
						<!-- <th>{getTitle(game)}</th> -->
						<th>
							<div class="grid grid-rows-3 items-center justify-center text-center">
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
										<p>Tied.</p>
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
					<tr>
						<th>{player.name}</th>
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
														>(+{playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] -
															1})</span
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
				{/each}
			</tbody>
		</table>
	</div>
{/if}
