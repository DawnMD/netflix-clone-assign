module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				netflixBackground: '#141414',
				netflixDarkRed: '#B20710',
				netflixLightRed: '#E50914',
			},
			textColor: {
				netflixwhite: '#e5e5e5',
			},
			minWidth: {
				netflixCard: '18rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
