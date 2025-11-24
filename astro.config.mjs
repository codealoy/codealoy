// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';

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
    plugins: [tailwindcss()],
    ssr: {
      external: [
        'node:fs',
        'node:fs/promises',
        'node:path',
        'node:url',
        'node:crypto',
      ],
    },
  },

  integrations: [
    react(),
    mdx({
      rehypePlugins: [rehypeSlug],
    }),
  ],
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
});
