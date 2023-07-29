/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "!./src/pages/materi/**/[slug].astro",
    "!./src/layouts/Presentation",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
