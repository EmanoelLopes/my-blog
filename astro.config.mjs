import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://emanoellopes.dev',

  integrations: [
    partytown(),
    react({
      include: [
        '**/react/*',
        '**/components/*',
      ],
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: 'catppuccin-macchiato',
    },
    
    gfm: true,
    smartypants: true,
  },

  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  adapter: netlify(),
});