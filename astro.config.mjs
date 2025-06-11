import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://corebrain.ai",
  integrations: [
    tailwind(),
    react(),
    icon({
      iconDir: "src/icons",
      include: {
        heroicons: ["*"],
        bx: ["*"]
      },
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                removeViewBox: false
              }
            }
          }
        ]
      }
    })
  ],
  vite: {
    ssr: {
      noExternal: ["@fontsource-variable/*"]
    },
    optimizeDeps: {
      exclude: ["@iconify-json/bx", "@iconify-json/heroicons"]
    }
  }
});
