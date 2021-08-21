<script>
	import Header from '$lib/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<footer>
	<p>visit <a class="hover:underline hover:text-red-500" href="https://kit.svelte.dev">kit.svelte.dev</a>
		to learn SvelteKit</p>
</footer>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>