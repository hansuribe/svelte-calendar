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
    // If bugs occur with parsing or stringify:
    // - uncomment line 24
    // - comment lines 25-27
    // - npm run dev
    // - comment line 21, uncomment rest
    // - run again
    // window.localStorage.removeItem("data");
    if (!window.localStorage.data) window.localStorage.data = JSON.stringify(days);
    days = JSON.parse(window.localStorage.data);
    window.location.hash = `${_DAYS[new Date().getDay()]}`;
</script>

<style>
    .week {
        display: flex;
        flex-direction: row;
        height: auto;
        width: 100vw;
    }

    @media only screen and (max-width: 1024px) {
        .week {
            flex-wrap: wrap;
        }
    }
</style>

<div class="week">
    {#each days as day}
        <Day data={day} />
    {/each}
</div>
