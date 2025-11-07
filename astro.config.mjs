// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore - Type incompatibility between @tailwindcss/vite and Astro's Vite types
    plugins: [tailwindcss()],
  },
});
