// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.fx.dev.br',

  integrations: [
    partytown(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});