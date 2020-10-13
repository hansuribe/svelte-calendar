<script>
  import Hour from "./Hour.svelte";
  import { modify, data } from "../stores.js";

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

  function handleApply() {
    let previousData = JSON.parse(window.localStorage.data);
    let updatedData = previousData.filter((el) => {
      if (el.name === $modify.day) {
        el.hours[$modify.hour].desc = $modify.desc;
      }
      return el;
    });
    window.localStorage.data = JSON.stringify(updatedData);
    $data = updatedData;
    exitModify();
  }

  document.onkeyup = (e) => e.key === "Escape" && exitModify();
</script>

<style>
  .modify-container {
    position: absolute;
    z-index: 99;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba(0, 0, 50, 0.75);
  }

  .modify {
    position: absolute;
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

  .preview {
    flex: 1;
  }

  .editor {
    margin-top: 1em;
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

        <button on:click={handleApply}>Apply</button>
      </div>
    </div>
  </div>
{/if}
