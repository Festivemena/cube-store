/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      "noto": ["noto"],
      "bungee": ["bungee"],
    },
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
    },
  },
  plugins: [],
}
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//       extend: {
//         screens: {
//           'me': { 'raw': '(min-height: 800px)' },
//           // => @media (min-height: 800px) { ... }
//           'xs': { 'raw': '(min-height: 550px)' },
//           // => @media (min-height: 550px) { ... }
//           'sm': { 'raw': '(min-height: 600px)' },
//           // => @media (min-height: 600px) { ... }
//         }
//     },
//   },
//   plugins: [],
// }
