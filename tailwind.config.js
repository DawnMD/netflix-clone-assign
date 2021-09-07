module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			backgroundColor: {
				netflixBackground: '#141414',
			},
			textColor: {
				netflixSubheading: '#e5e5e5',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
