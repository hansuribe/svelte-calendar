<script>
    import Hour from "./Hour.svelte";
    import { modify } from "../stores.js";
    export let data;

    function hourHandler(toModify) {
        $modify = toModify;
    }
</script>

<style>
    .day {
        height: 100%;
        border: 1px solid black;
        margin: 0.2em;
        min-width: 15vw;
        border-radius: 5px;
    }
</style>

<div class="day">
    <h1>{data.name.toUpperCase()}</h1>
    {#each Object.keys(data.hours) as hour}
        <Hour {hour} desc={data.hours[hour]} onclick={hourHandler} />
    {/each}
</div>
