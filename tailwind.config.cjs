/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#C71F37",
			
   "secondary": "#C71F37",
			
   "accent": "#7de2d1",
			
   "neutral": "#C71F37",
			
   "base-100": "#313131",
			
   "info": "#3ABFF8",
			
   "success": "#36D399",
			
   "warning": "#fde047",
			
   "error": "#dc2626",
			},
		  },
		],
	  },
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
}
