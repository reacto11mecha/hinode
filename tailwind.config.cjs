/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "!./src/pages/materi/**/[slug].astro",
    "!./src/layouts/Presentation",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/header-bg.jpg')",
      },
    },
    fontFamily: {
      zenka: ["Zen Kaku Gothic New", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      play: ["Play", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
