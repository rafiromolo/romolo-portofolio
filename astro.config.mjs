// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://portofolio-rafi-romolo.vercel.app",
  integrations: [],
  adapter: vercel(),
  vite: {
    plugins: [tailwind()],
  },
});
