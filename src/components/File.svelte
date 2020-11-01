<script>
  let textArea, fileInput;

  export let importHandler = () => {};

  function clickHandler(e) {
    if (e.target.classList.contains("file-import") === false) {
      importHandler();
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

  textarea {
    height: 12em;
  }
</style>

<container id="file" on:click={clickHandler}>
  <div class="file-import">
    <input bind:this={fileInput} type="file" name="files[]" multiple />
    <textarea bind:this={textArea} />
  </div>
</container>
