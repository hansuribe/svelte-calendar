<script>
  import Hour from "./Hour.svelte";
  export let data;
</script>

<style>
  .day {
    height: 100%;
    border: 1px solid black;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0, 0.75);
    margin: 0.2em;
    min-width: 20em;
    border-radius: 5px;
    background: var(--bg);
  }

  h1 {
    color: white;
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
