<script>
  import exportToCsv from "../utils/csv.js";

  let lastScrollOffset = 0;
  let navDiv;

  document.addEventListener("scroll", () => {
    let offset = window.pageYOffset || document.documentElement.scrollTop;
    if (offset > lastScrollOffset) {
      navDiv.style.top = "-100px";
    } else {
      navDiv.style.top = "0px";
    }

    lastScrollOffset = offset <= 0 ? 0 : offset;
  }, false);
</script>

<style>
  .nav {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 5em;
    transition: 500ms cubic-bezier(0.215, 0.610, 0.5, 1);
    background-color: var(--bg);
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.75);
  }

  .items {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .nav-item {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: orange;
    border-radius: 10px;
    width: 10em;
    transition: 200ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  @media only screen and (max-width: 728px) {
    .nav-label {
      display: none;
    }
    .nav-item {
      transition: 200ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      width: 5em;
      height: 3em;
    }
  }
</style>

<div class="nav" bind:this={navDiv}>
  <div class="items">
    <div class="nav-item">
      <img
        class="csv"
        on:click={exportToCsv}
        alt="export_to_csv"
        src="csv-file-format.png" />
      <h2 class="nav-label">Export</h2>
    </div>
  </div>
</div>
