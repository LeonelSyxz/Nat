// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()],
  },
});
