/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//   "./index.html",
//   "./src/**/*.{js,ts,jsx,tsx}",
// ],
//   theme: {
//     fontFamily: {
//       'sans': 'Encode Sans Semi Condensed, sans-serif',
//     },
//     extend: {
//       width: {
//         '45%': '45%',
//       }
//     },
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
                '45%': '45%',
              },
      colors: {
        sky: colors.sky,
        slate: colors.slate,
      },
    },
  },
  plugins: [],
});
