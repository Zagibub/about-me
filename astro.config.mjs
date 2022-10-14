import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://eremeev.de",
  // Enable Vue to support Vue components.
  integrations: [vue(), tailwind()],
});
