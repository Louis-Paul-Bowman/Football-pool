<script lang="ts">
    import { teams, type TeamIds } from "$lib/espnApi";
    export let homeId : TeamIds
    export let awayId : TeamIds
    export let isSpread: boolean
    export let selected: TeamIds | null = null

    let spread: Number | null = isSpread ? 1 : null

    const homeName = teams[homeId]
    const homeLogo = `/img/logos/svg/${homeId}.svg`

    const awayName = teams[awayId]
    const awayLogo = `/img/logos/svg/${awayId}.svg`

    let awayCSS = ""
    let homeCSS = ""
    const hoverEffect = "hover:border-green-500 hover:border-dashed hover:border-8"
    const selectedEffect = "border-green-500 border-8"

    $: {
        awayCSS = `w-20 h-20 object-contain ${hoverEffect} ${selected == awayId ? selectedEffect : "border-transparent"} transition-colors duration-300`
        homeCSS = `w-20 h-20 object-contain ${hoverEffect} ${selected == homeId ? selectedEffect : "border-transparent"} transition-colors duration-300`
    }
</script>



<div class="max-w-sm mx-auto mt-12 border-black rounded-lg border-solid border p-4 space-y-2">
    <p class="text-lg font-medium mb-4 text-center">{awayName} at {homeName}</p>
    <div class="flex space-x-4 items-center justify-center">
        <img on:click={() => selected = awayId} src={awayLogo} alt="{awayName} logo" class={awayCSS}>
        <img on:click={() => selected = homeId} src={homeLogo} alt="{homeName} logo" class={homeCSS}>
    </div>
    
    {#if isSpread}
    <div class="flex space-x-2 items-center justify-center">
        <p>By</p>
        <input bind:value={spread} type="number" min="1" max="100" step="1" class="text-black">
    </div>
    {/if}
</div>



