<script lang="ts">
    import { teams, type TeamIds } from "$lib/espnApi";
    export let homeId : TeamIds
    export let awayId : TeamIds

    const homeName = teams[homeId]
    const homeLogo = `/img/logos/png/${homeId}.png`

    const awayName = teams[awayId]
    const awayLogo = `/img/logos/png/${awayId}.png`
</script>

<p>{awayName} at {homeName}</p>
<img src={awayLogo} alt="{awayName} logo">
<img src={homeLogo} alt="{homeName} logo">