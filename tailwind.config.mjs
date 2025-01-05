/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      colors: {
        secondary: '#fffef7',
      },

    },
  },
  plugins: [],
}
