const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		colors: {
			black: '#000',
			white: '#fff',
			orange: '#E06330',
			yellow: 'yellow',
			blue: {
				DEFAULT: '#8787ff', // Light theme blue
				dark: '#4a4aff', // Dark theme blue
			},
		},
		fontFamily: {
			// Headings
			sans: ['Inter', 'sans-serif'],
			// Base text
			monospace: ['Inconsolata', 'monospace'],
		},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
		},
		letterSpacing: {
			wide: '.025em',
		},
		extend: {
			gridTemplateColumns: (() => {
				let gridTemplateColumns = {};
				for (let i = 1; i <= 10; i++) {
					gridTemplateColumns[`auto-fill-${i}`] = `repeat(auto-fill, minmax(${i * 50}px, 1fr))`;
					gridTemplateColumns[`auto-fit-${i}`] = `repeat(auto-fit, minmax(${i * 50}px, 1fr))`;
				}
				gridTemplateColumns['auto-fill-content'] = 'repeat(auto-fill, minmax(auto, 1fr))';
				gridTemplateColumns['auto-fit-content'] = 'repeat(auto-fit, minmax(auto, 1fr))';
				return gridTemplateColumns;
			})(),

			gridAutoColumns: {
				max: 'max-content',
			},
			aspectRatio: {
				'16/9': '16 / 9',
				'4/3': '4/3',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h2: {
					letterSpacing: theme('letterSpacing.wide'),
					fontWeight: 'bold',
				},
				li: {
					letterSpacing: theme('letterSpacing.wide'),
				},
			});
		}),
	],
};
