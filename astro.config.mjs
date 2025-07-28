// @ts-check
import { defineConfig, envField } from 'astro/config';

import netlify from '@astrojs/netlify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      AUTHING_APP_ID: envField.string({
        context: "client",
        access: "public",
        default: "688087989d9e8f80599b9bd5",
      }),
    },
  },
});
