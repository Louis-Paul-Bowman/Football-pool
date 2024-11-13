<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { teams } from '$lib/espnApi.js';
	import { selectable } from '$lib/helpers.js';
    import { CheckIcon, XIcon } from 'lucide-svelte';

	export let data;
	let { gamePicks, weeks, currentWeek, leaguePlayers, league } = data;
	let selectedWeek: number = currentWeek;
	const displayableWeeks: typeof weeks = {};
	for (const [weekNum, weekData] of Object.entries(weeks)) {
		if (!selectable(weekData.games[0].date)) {
			displayableWeeks[Number(weekNum)] = weekData;
			selectedWeek = Number(weekNum);
		}
	}

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

	let playersWeeklyScores = scorePlayers();

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

	async function update() {}
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

	<div class="table-container">
		<table class="table table-hover text-center">
			<thead>
				<tr>
					<th></th>
					{#each weeks[selectedWeek].games as game (game.id)}
						<!-- <th>{getTitle(game)}</th> -->
                        <th>
                            <div class="grid grid-rows-3 items-center justify-center text-center">
                                <img src="/img/logos/svg/{game.away}.svg" alt="{teams[game.away]} logo" class="w-10 h-10">
                                <p>at</p>
                                <img src="/img/logos/svg/{game.home}.svg" alt="{teams[game.home]} logo" class="w-10 h-10">
                            </div>
                        </th>
					{/each}
					<th>Week</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody>
				{#each leaguePlayers as player}
					<tr>
						<th>{player.name}</th>
						{#each weeks[selectedWeek].games as game (game.id)}
							<!-- <td>{gamePicks[game.id].find((pick) => pick.playerId === player.id)?.pick}</td> -->
							<td>
                                <div class="flex items-center justify-center">
                                    {#if playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] === 0}
                                        <XIcon size={24} color="red" />
                                        {#if league.spreadGames.includes(game.id)}
                                            <span class="ml-1">(+0)</span>
                                        {/if}
                                    {:else}
                                        <CheckIcon size={24} color="green" />
                                        {#if league.spreadGames.includes(game.id)}
                                            <span class="ml-1">(+{playersWeeklyScores[player.id][selectedWeek].gamesScores[game.id] - 1})</span>
                                        {/if}
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
