import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    config: {
      darkMode: 'class',
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
      theme: {
        extend: {
          colors: {
            'midnight-blue': '#2f3542',
            'terracotta': '#c0392b',
            'terracotta-light': '#f26d5f',
          },
        },
      },
    }
  })],
});
