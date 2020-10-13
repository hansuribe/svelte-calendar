
<script>
	import Week from "./components/Week.svelte";
	import Modify from "./components/Modify.svelte";
</script>

<main>
	<Modify /> 
	<Week/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>