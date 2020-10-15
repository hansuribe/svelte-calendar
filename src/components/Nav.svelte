<script>
  import exportToCsv from "../utils/csv.js";
</script>

<style>
  .nav {
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 5em;
    background-color: whitesmoke;
  }

  .items {
      display: flex;
      height: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
  }

  .nav-item {
      cursor: pointer;
  }

</style>

<div class="nav">
  <div class="items">
    <div class="nav-item">
      <img class="csv" on:click={exportToCsv} alt="export_to_csv" src="csv-file-format.png" />
    </div>
  </div>
</div>
