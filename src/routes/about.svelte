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
	<title>About</title>
</svelte:head>

<div class="min-h-full m-10 md:min-h-screen">
	<h1 class="text-center font-extrabold text-4xl text-indigo-500 p-10 overflow-hidden">About Me</h1>
	<figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 drop-shadow-2lg">
		<img class="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="vivek_raj.jpg"
			alt="Vivel Raj" width="384" height="512">
		<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
			<blockquote>
				<p class="text-lg font-normal text-justify">
					Hey there.. I am Vivek. I am a data science & deep learning enthusiast.
					Recently i have started learning web development using React & Svelte frameworks.

				</p>
			</blockquote>
			<figcaption class="font-medium">
				<div class="text-cyan-600">
					Vivek Raj
				</div>
				<div class="text-gray-500">
					Data Science Enthusiast
				</div>
			</figcaption>
		</div>
	</figure>
</div>