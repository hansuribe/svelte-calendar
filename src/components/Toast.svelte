<script>
  export let active = false,
    content = "";
</script>

<style>
  div {
    position: absolute;
    z-index: 99;
    top: -25%;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgb(44, 149, 197);
    border-radius: 5px;
    width: 10em;
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
    color: rgb(208, 255, 0);
  }
</style>

{#if active && content}
  <div class="toastContainer">
    <a class="toastContent" href={content} target="_blank">{content}</a>
  </div>
{/if}
