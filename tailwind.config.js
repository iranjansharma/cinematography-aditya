/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'hero': "url('/hero_bg.jpg')",
    },
    extend: {},
  },
  plugins: [],
}