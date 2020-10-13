<div class="hour-container" style="--bg:{bg}" on:click={onclick({hour, desc})}>
    <p class="hour-time">{hour}</p>
    <h3 class="hour-desc">{desc}</h3>
</div>

<script>
    export let hour = 1, desc = "", bg = "whitesmoke", onclick = () => '';
</script>

<style>
    .hour-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid black;
        background-color: var(--bg);
        cursor: pointer;
    }

    .hour-container:hover {
        opacity: .5;
    }

    .hour-time {
        flex: 1;
    }

    .hour-desc {
        flex: 3;
    }
</style>

