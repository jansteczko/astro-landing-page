/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  // './src/**/*.{html,js}',
		'node_modules/preline/dist/*.js',
	],
	plugins: [
	  // require('@tailwindcss/forms'),
		require('preline/plugin'),
	], }
module.exports = {
	content: ["./node_modules/flyonui/dist/js/*.js"], // Require only if you want to use FlyonUI JS component

  plugins: [
    require("flyonui"),
    require("flyonui/plugin") // Require only if you want to use FlyonUI JS component
  ],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
    require('@tailwindcss/typography')
  ],
}
