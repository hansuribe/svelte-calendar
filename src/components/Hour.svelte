<script>
  export let hour = 1,
    desc = "",
    bg = "whitesmoke",
    uri = "",
    completed = 0, // There isn't any task
    onclick = () => "";

  import Toast from "./Toast.svelte";
  $: hover = false;

  function clickHandler(e) {
    if (e.target.classList.contains("hour-container")) {
      window.scrollTo(0, 0);
      onclick({ hour, desc, bg, uri });
    }
  }
</script>

<style>
  .hour-container {
    position: relative;
    width: 100%;
    display: flex;
    min-height: 5em;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid black;
    background-color: var(--bg);
    cursor: pointer;
    opacity: 0.8;
  }

  .hour-container:hover {
    transition: 350ms ease-in-out;
    z-index: 1;
  }

  .hour-container:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: inherit;
    height: inherit;
    box-shadow: 1px 1px 10px 5px var(--bg);
    opacity: 1;
    animation: glow 1.5s ease-in-out infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: 1px 1px 10px 5px var(--bg);
    }
    50% {
      box-shadow: 1px 1px 25px 15px var(--bg);
    }
    100% {
      box-shadow: 1px 1px 10px 5px var(--bg);
    }
  }

  .hour-container:hover > .hour-desc {
    white-space: normal;
  }

  .hour-time {
    margin: auto .3em;
  }

  .hour-desc {
    flex: 10;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    text-align: start;
    text-overflow: ellipsis;
  }

  input[type="checkbox"] {
    margin: auto;
    z-index: 99;
    width: 2em;
    height: 1em;
  }
</style>

<div
  class="hour-container"
  style="--bg:{bg}"
  on:mouseenter={() => (hover = true)}
  on:mouseleave={() => (hover = false)}
  on:click={clickHandler}>
  {#if completed === 1 || completed === 2}
  <input type="checkbox" property="1"/>
  {/if}
  <Toast active={hover} content={uri} />
  <h2 class="hour-time">{hour}:00</h2>
  <h3
    class="hour-desc"
    style={`text-decoration ${completed === 2 ? 'line-through' : 'none'}`}>
    {desc}
  </h3>
</div>
