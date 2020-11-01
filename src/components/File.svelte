<script>
  let templateList, fileInput;

  import { saveFilesAsData } from "../utils/csv.js";

  export let importHandler = () => {};

  function clickHandler(e) {
    if (e.target.classList.contains("file-import") === false) {
      importHandler();
    }
  }

  function uploadHandler(e) {
    const con = confirm(
      "Are you sure you want to continue? This will overide current templates"
    );
    if (con) {
      saveFilesAsData(e.target.files);
    }
  }
</script>

<style>
  container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 40em;
    height: 25em;
    margin: auto;
    z-index: 100;
    background-color: white;
    box-shadow: 1px 1px 1px 3px rgba(0, 0, 0, 0.7);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    border: none;
  }
</style>

<container id="file" on:click={clickHandler}>
  <div class="file-import">
    <input
      class="file-import"
      on:change={uploadHandler}
      bind:this={fileInput}
      type="file"
      name="files[]"
      multiple
      accept=".csv" />
    <ul class="file-import" bind:this={templateList} />
  </div>
</container>
