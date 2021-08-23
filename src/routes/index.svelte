<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>


<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<img src="markus-spiske.jpg" alt="matrix background" class="absolute object-cover h-full w-full">
	<div class="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
		<h1 class="text-5xl md:text-8xl text-green-100 font-bold font-GreatVibes leading-none lg:leading-snug">
			Hi!.I'm Vivek.
		</h1>
	</div>
</section>