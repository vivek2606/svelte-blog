import { mdsvex } from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel()
	},

	preprocess: [mdsvex(mdsvexConfig), sveltePreprocess()]
};

export default config;
