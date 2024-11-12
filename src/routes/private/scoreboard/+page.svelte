<script lang="ts">
    import { TabGroup, Tab } from '@skeletonlabs/skeleton';
    import { teams } from '$lib/espnApi.js';
	import { selectable } from '$lib/helpers.js';

    export let data
    let  {formatted, weeks, currentWeek} = data
    let selectedWeek:number = currentWeek
    const displayableWeeks: typeof weeks = {}
    for (const [weekNum, weekData] of Object.entries(weeks)) {
        if (!selectable(weekData.games[0].date)) {
            displayableWeeks[Number(weekNum)] = weekData
            selectedWeek = Number(weekNum)
        }
    }


    async function update() {
    }
</script>

{#if weeks}
	<div>
		<TabGroup justify="justify-center">
			{#each Object.keys(displayableWeeks) as week}
				<Tab bind:group={selectedWeek} name="{week}" value={Number(week)}>{week}</Tab>
			{/each}
			<div>
				<button on:click={async () => await update()} class="btn w-16 text-center rounded-lg variant-filled-surface">Update</button>
			</div>
			
		</TabGroup>
	</div>
    
	<div class="table-container">
        <table class="table table-hover">
            <thead>
                <tr>
                    {#each weeks[selectedWeek].games as game (game.id)}
                        <th>{teams[game.away]} at {teams[game.home]}</th>
                    {/each}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {#each weeks[selectedWeek].games as game (game.id)}
                        <td>{game.homeScore > game.awayScore ? `${teams[game.home]} by ${game.homeScore - game.awayScore}` : game.homeScore < game.awayScore ? `${teams[game.away]} by ${game.awayScore - game.homeScore}`: "Tie"}</td>
                    {/each}
                </tr>
                
            </tbody>
		
	</div>
{/if}
