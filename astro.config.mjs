// @ts-check
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      NODE_ENV: envField.string({
        context: 'server',
        access: 'public',
        default: 'development',
      }),
      PORT: envField.number({
        context: 'server',
        access: 'public',
        default: 3000,
      }),
      API_URL: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  vite: {
    // @ts-ignore - Type incompatibility between @tailwindcss/vite and Astro's Vite types
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
