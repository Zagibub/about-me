/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        "baloo-2": ["'Baloo Bhaina 2'", "cursive"],
        "parick-hand-SC": ["'Patrick Hand SC'", "cursive"],
      },
    },
    colors: {
      palette: {
        100: "#ececec",
        200: "#9fd3c7",
        300: "#385170",
        400: "#142d4c",
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};
