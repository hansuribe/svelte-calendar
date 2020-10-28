<script>
  import Week from "./components/Week.svelte";
  import Nav from "./components/Nav.svelte";
  import Modify from "./components/Modify.svelte";
  import File from "./components/File.svelte";

  let file = false;

  function importHandler() {
    file = !file;
  }
</script>

<style>
  main {
    text-align: center;
    padding: 0;
    margin: 0;
  }
</style>

<main>
  <Modify />
  {#if file === true}
    <File {importHandler} />
  {/if}
  <Nav {importHandler} />
  <Week />
</main>
