module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/**/*.{html,js,svelte,ts}'],
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
