<script>
  let textArea, fileInput;
  export let importHandler;

  import { onMount, onDestroy } from "svelte";

  onMount(() => {
    setTimeout(() => {
      document.addEventListener("click", (e) => {
        if (e.target.id !== "file") importHandler();
      });
    }, 50);
  });

  onDestroy(() => {
    document.removeEventListener("click", () => {});
  });
</script>

<style>
  container {
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

<container id="file">
  <input bind:this={fileInput} type="file" name="files[]" multiple />
  <textarea bind:this={textArea} />
</container>
