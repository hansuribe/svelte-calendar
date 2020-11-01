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
    justify-content: space-between;
  }

  label {
    width: 8em;
    cursor: pointer;
    padding: .8em;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border: 1px solid black;
    border-radius: 15px;
    background-color: var(--btn);
    box-shadow: 1px 1px 1px 1px rgba(39, 39, 39, 0.6);
  }

  img {
    object-fit: contain;
  }
  p {
    font-size: 1.2em;
    font-weight: bold;
  }

  input {
    display: none;
  }
</style>

<container id="file" on:click={clickHandler}>
  <div class="file-import">
    <h1 class="file-import">
      Template Manager
    </h1>
    <label for="file-upload" class="file-import">
      <img class="file-import" alt="upload" src="upload.png"/><p class="file-import">Upload</p>
    </label>
    <input
      class="file-import"
      id="file-upload"
      on:change={uploadHandler}
      bind:this={fileInput}
      type="file"
      name="files[]"
      multiple
      accept=".csv" />
    <ul class="file-import" bind:this={templateList} />
  </div>
</container>
