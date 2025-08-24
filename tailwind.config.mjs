export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'midnight-blue': '#2f3542',
      },
      backgroundColor: {
        'dark': {
          DEFAULT: '#2f3542',
        }
      },
    },
  },
  plugins: []
}
