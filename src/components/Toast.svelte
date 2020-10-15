<script>
  export let active = false,
    content = "";
</script>

<style>
  div {
    position: absolute;
    z-index: 99;
    top: -25%;
    left: -10%;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    width: calc(100% + 2em);
    height: 2em;
    display: flex;
    align-items: center;
  }

  a {
    color: white;
    font-weight: bold;
    padding: 0.2em;
    text-decoration: underline;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    text-align: start;
    text-overflow: ellipsis;
  }

  a:hover {
    color: blue;
  }
</style>

{#if active && content}
  <div class="toastContainer">
    <a class="toastContent" href={content} target="_blank">{content}</a>
  </div>
{/if}
