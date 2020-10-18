<script>
  import Hour from "./Hour.svelte";
  import { modify } from "../stores.js";
  import update from "../utils/updateData.js";
  import { _COLORS } from "../consts.js";

  // Exit Modify modal when clicking outside main div
  function handleClick(e) {
    const classes = Object.values(e.target.classList);
    if (classes.includes("modify-container")) {
      exitModify();
    }
  }

  // Modify doesn't appear when $modify is empty,
  // So this is to close the modal basically.
  function exitModify() {
    $modify = "";
  }

  function inputHandler(e) {
    if (e.key === "Enter") {
      handleApply();
    } else {
      $modify.desc = e.target.value;
    }
  }

  function uriHandler(e) {
    if (e.key === "Enter") {
      handleApply();
    } else {
      $modify.uri = e.target.value;
    }
  }

  function handleApply() {
    const opts = {
      desc: $modify.desc,
      uri: $modify.desc ? $modify.uri : "",
      bg: $modify.desc ? $modify.bg : "whitesmoke",
      completed: $modify.desc ? 1 : 0,
    }
    update($modify.day, $modify.hour, opts, exitModify);
  }
  function clear(){
    $modify.desc = "";
    $modify.uri = "";
  }
  function handleSelect(e) {
    $modify.bg = e.target.value;
  }

  document.onkeyup = (e) => e.key === "Escape" && exitModify();
</script>

<style>
  .modify-container {
    position: absolute;
    z-index: 99;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
  }

  .modify {
    position: fixed;
    width: 25em;
    height: auto;
    border-start-start-radius: 15px;
    border-start-end-radius: 15px;
    background: white;
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.75);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
  }

  .editor {
    margin: 1em auto;
    display: flex;
    flex-direction: column;
    width: 90%;
  }

  select {
    appearance: none;
  }

  button {
    width: 50%;
    margin: auto;
    cursor: pointer;
  }
  button.clear{
    background-color:#ff5353;
  }
  .btn-wrapper{
    display: flex;
  }
</style>

{#if $modify}
  <div class="modify-container" on:click={handleClick}>
    <div class="modify">
      <div class="preview">
        <Hour hour={$modify.hour} desc={$modify.desc} bg={$modify.bg} />
      </div>
      <div class="editor">
        <input
          value={$modify.desc}
          placeholder="Enter task"
          on:keyup={inputHandler} />
        <input
          value={$modify.uri}
          placeholder="Enter URI"
          on:keyup={uriHandler} />
        <select class="select-bg" style={`background-color: ${$modify.bg};`}>
          {#each _COLORS as color}
            <option
              on:click={handleSelect}
              selected={$modify.bg == color}
              value={color}
              style={`background-color: ${color};`}>
              {color.toUpperCase()}
            </option>
          {/each}
        </select>
        <div class="btn-wrapper">
          <button class="clear" on:click={clear}>Clear</button>
          <button on:click={handleApply}>Apply</button>
        </div>
      </div>
    </div>
  </div>
{/if}
