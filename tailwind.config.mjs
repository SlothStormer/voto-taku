/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			accent: 'rgb(136, 58, 234)',
			'accent-light': 'rgb(224, 204, 250)',
			'accent-dark': 'rgb(23, 23, 23)',
			'neutral-dark': 'rgb(17, 17, 17)',
			'neutral-glass': 'rgba(23, 23, 23, 0.7)',
		  },
		},
	  },
	plugins: [],
}
