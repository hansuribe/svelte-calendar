<script>
  import Hour from "./Hour.svelte";
  export let data;
</script>

<style>
  .day {
    height: 100%;
    border: 1px solid black;
    margin: 0.2em;
    min-width: 20em;
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
    <Hour
      hour={hour}
      day={data.name}
      desc={data.hours[hour].desc}
      bg={data.hours[hour].bg}
      uri={data.hours[hour].uri}
      completed={data.hours[hour].completed} />
  {/each}
</div>
