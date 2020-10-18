<script>
  export let day = "sunday",
    hour = 1,
    desc = "",
    bg = "whitesmoke",
    uri = "",
    completed = 0; // There isn't any task

  import Toast from "./Toast.svelte";
  import { modify } from "../stores.js";
  import update from "../utils/updateData.js";

  $: hover = false;
  let hourDiv, hourDesc, checkboxInput;
  function clickHandler(e) {
    if (e.target.classList.contains("hour-container")) {
      $modify = { day, hour, desc, bg, uri };
      hourDiv.scrollIntoView({ block: "center", behavior: "smooth" });
    } else if (e.target === checkboxInput) {
      const checked = e.target.checked;
      update(day, hour, { completed: checked ? 2 : 1 });
    }
  }

  function hoverHandler(hoverState) {
    hover = hoverState;

    if (hover === true && desc !== "") {
      const fontSize = parseFloat(window.getComputedStyle(hourDesc).fontSize);
      const excWidth = fontSize * desc.length;
      const currentWidth = parseFloat(window.getComputedStyle(hourDiv).width);
      const diff = (excWidth - currentWidth) / 2;
      const toAdd = diff < 45 ? 0 : diff;
      hourDiv.style.width = `calc(100% + ${toAdd}px)`;
    } else if (hover === false && desc !== "") hourDiv.style.width = "100%";
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
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.8);
    background-color: var(--bg);
    cursor: pointer;
  }

  .hour-container:hover {
    transition: 350ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 1;
    z-index: 1;
  }

  .hour-container:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 1px 1px 10px 5px var(--bg);
    opacity: 1;
    animation: glow 1.5s ease-in-out infinite;
  }

  @keyframes glow {
    0% {
      box-shadow: 1px 1px 7px 3px var(--bg);
    }
    50% {
      box-shadow: 1px 1px 15px 7px var(--bg);
    }
    100% {
      box-shadow: 1px 1px 7px 3px var(--bg);
    }
  }

  .hour-time {
    margin: auto 0.3em;
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
  bind:this={hourDiv}
  on:mouseenter={() => hoverHandler(true)}
  on:mouseleave={() => hoverHandler(false)}
  on:click={clickHandler}>
  {#if completed === 1 || completed === 2}
    <input
      checked={completed === 2}
      bind:this={checkboxInput}
      type="checkbox"
      property="1" />
  {/if}
  <Toast active={hover} content={uri} />
  <h2 class="hour-time">{hour}:00</h2>
  <h3
    class="hour-desc"
    bind:this={hourDesc}
    style={`text-decoration ${completed === 2 ? 'line-through' : 'none'}`}>
    {desc}
  </h3>
</div>
