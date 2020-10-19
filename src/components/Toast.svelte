<script>
  export let active = false,
  content = "";
  let src = "/clipboard.png";
  export function copyToClipBoard(content){
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
    background-color: white;
    border-radius: 5px;
    width: 20em;
    height: 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    color: dodgerblue;
    font-weight: bold;
    padding: 0.2em;
    font-size: 1.2em;
    text-decoration: none;
    overflow: hidden;
    display: inline-block;
    white-space: nowrap;
    text-align: start;
    text-overflow: ellipsis;
  }

  a:hover {
    text-decoration: underline;
  }


  .clipboard-image {
    position: static;
    max-width: 30%;
    height: 100%;
  }


</style>

{#if active && content}
  <div class="toast-container">
    <a class="toast-content" href={content} target="_blank">{content}</a>
    <img class="clipboard-image" {src} alt="copy to clipboard" on:click={copyToClipBoard(content)}>
  </div>
{/if}
