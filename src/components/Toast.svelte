<script>
  export let active = false,
  content = "";
  let src = "/clipboard.png";
  export function copyToClickBoard(content){
    var copyText = document.body.appendChild(document.createElement("input"));
    copyText.value = content;
    copyText.select();
    document.execCommand('copy');
    copyText.parentNode.removeChild(copyText);
  }
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

  .clipboard-image {
    max-width: 30%;
    max-height: 100%
  }


</style>

{#if active && content}
  <div class="toast-container">
    <a class="toast-content" href={content} target="_blank">{content}</a>
    <img class="clipboard-image" {src} alt="clickboard" on:click={copyToClickBoard(content)}>
  </div>
{/if}
