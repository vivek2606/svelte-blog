module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/routes/blog/*.md', './src/routes/blog/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				Damion: ['Damion', 'cursive'],
				FiraSans: ['Fira Sans', 'sans-serif'],
				GreatVibes: ['Great Vibes', 'cursive'],
				Roboto: ['Roboto', 'sans-serif']
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
