
<script>
	import Week from "./components/Week.svelte";
	import Nav from "./components/Nav.svelte";
	import Modify from "./components/Modify.svelte";
</script>

<main>
	<Modify /> 
	<Nav />
	<Week/>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}
</style>