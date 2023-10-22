import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

import { thumbnailIntegration } from "./integrations/thumbnail";

// https://astro.build/config
export default defineConfig({
  site: "https://hinode.rmecha.my.id",
  vite: {
    ssr: {
      noExternal: ["reveal.js"],
    },
  },
  integrations: [tailwind(), sitemap(), react(), thumbnailIntegration()],
});
