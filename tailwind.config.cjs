/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  darkMode: "class",
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["active"],
    },
  },
  plugins: [],
}
