// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your project structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

