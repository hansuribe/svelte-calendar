<script>
    import Day from "./Day.svelte";
    import { data } from "../stores.js";
    import { onDestroy } from "svelte";

    let days;
    const unsubscribe = data.subscribe((value) => (days = value));

    onDestroy(unsubscribe);
</script>

<style>
    .week {
        display: flex;
        flex-direction: row;
        height: auto;
        width: 100vw;
    }
</style>

<div class="week">
    {#each days as day}
        <Day data={day} />
    {/each}
</div>
