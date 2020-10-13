<script>
    export let hour = 1,
        desc = "",
        bg = "dodgerblue",
        onclick = () => "";
</script>

<style>
    .hour-container {
        position: relative;
        width: 100%;
        display: flex;
        min-height: 5em;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid black;
        background-color: var(--bg);
        cursor: pointer;
        opacity: .8;
    }
    
    .hour-container:hover {
        transition: 350ms ease-in-out;
        z-index: 1;
    }

    .hour-container:hover::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: inherit;
        height: inherit;
        box-shadow: 1px 1px 10px 5px var(--bg);
        opacity: 1;
        animation: glow 1.5s ease-in-out infinite;
    }

    @keyframes glow {
        0% {
            box-shadow: 1px 1px 10px 5px var(--bg);
        } 50% {
            box-shadow: 1px 1px 25px 15px var(--bg);
        } 100% {
            box-shadow: 1px 1px 10px 5px var(--bg);
        }
    }

    .hour-container:hover > .hour-desc {
        white-space: normal;
    }

    .hour-time {
        flex: 1;
    }

    .hour-desc {
        flex: 3;
        overflow: hidden;
        display: inline-block;
        white-space: nowrap;
        text-align: start;
        text-overflow: ellipsis;
    }
</style>

<div
    class="hour-container"
    style="--bg:{bg}"
    on:click={onclick({ hour, desc, bg })}>
    <p class="hour-time">{hour}</p>
    <h3 class="hour-desc">{desc}</h3>
</div>
