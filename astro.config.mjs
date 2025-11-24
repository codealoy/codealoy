// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.codealoy.com',
  trailingSlash: 'ignore',
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
    ssr: {
      external: [
        'node:fs/promises',
        'node:path',
        'node:url',
        'node:crypto',
      ],
    },
  },

  integrations: [react(), mdx()],
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
});
