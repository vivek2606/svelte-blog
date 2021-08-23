<script>
	import Header from '$lib/Header.svelte';
</script>
<div class="flex flex-col">
	<Header />
	<main>
		<slot />
	</main>

	<footer class="text-center bg-gray-800 text-gray-100 p-6 ">
		<p>Made with &#128150; using <a class="underline hover:text-red-500" href="https://svelte.dev">Svelte</a>.
			<span>&#169;</span>Vivek Raj. 2021
		</p>
		<p>visit <a class="underline hover:text-red-500" href="https://kit.svelte.dev">kit.svelte.dev</a>
			to learn SvelteKit</p>
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Damion&family=Fira+Sans:wght@100&family=Great+Vibes&family=Roboto:wght@100&display=swap');
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>