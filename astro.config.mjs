// @ts-check
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import rehypeSlug from 'rehype-slug';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.codealoy.com',
  trailingSlash: 'ignore',
  markdown: {
    processor: unified({ rehypePlugins: [rehypeSlug] }),
  },
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
    resolve: {
      // Ensure a single React instance across SSR, client islands, and
      // React-dependent libs (framer-motion, radix, tanstack-query) to avoid
      // "Invalid hook call / multiple copies of React" hydration crashes.
      dedupe: ['react', 'react-dom'],
    },
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

  integrations: [react(), mdx()],
  adapter: cloudflare({
    imageService: 'cloudflare',
    prerenderEnvironment: 'node',
  }),
});
