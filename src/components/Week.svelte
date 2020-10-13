<script>
    import Day from "./Day.svelte";
    import { data } from "../stores.js";
    import { onDestroy } from "svelte";
    const _DAYS = {
        1: "SUNDAY",
        2: "MONDAY",
        3: "TUESDAY",
        4: "WEDENSDAY",
        5: "THURSDAY",
        6: "FRIDAY",
        7: "SATURDAY",
    };

    let days;
    const unsubscribe = data.subscribe((value) => (days = value));

    onDestroy(unsubscribe);

    window.location.hash = `${_DAYS[new Date().getDay()]}`;
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
