<script>
  import Hour from "./Hour.svelte";
  import { modify } from "../stores.js";
  export let data;

  function hourHandler(toModify) {
    $modify = { day: data.name, ...toModify };
  }
</script>

<style>
  .day {
    height: 100%;
    border: 1px solid black;
    margin: 0.2em;
    width: 20em;
    border-radius: 5px;
  }

  @media only screen and (max-width: 1024px) {
    .day {
      width: 25em;
    }
  }
</style>

<div class="day" id={data.name.toUpperCase()}>
  <h1>{data.name.toUpperCase()}</h1>
  {#each Object.keys(data.hours) as hour}
    <Hour {hour} desc={data.hours[hour]} onclick={hourHandler} />
  {/each}
</div>
