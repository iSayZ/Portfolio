/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    fontFamily: {
      'sans': 'Encode Sans Semi Condensed, sans-serif',
    },
    extend: {
      width: {
        '45%': '45%',
      }
    },
  },
  plugins: [],
}
