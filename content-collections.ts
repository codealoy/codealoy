import { defineCollection, defineConfig } from '@content-collections/core';
import {
  createDocSchema,
  createMetaSchema,
  transformMDX,
  TransformOptions,
} from '@fumadocs/content-collections/configuration';
import { rehypeCode } from 'fumadocs-core/mdx-plugins';

const transformMDXOptions: TransformOptions = {
  rehypeCodeOptions: {
    themes: {
      light: 'catppuccin-frappe',
      dark: 'catppuccin-mocha',
    },
  },
};

const courses = defineCollection({
  name: 'courses',
  directory: 'content/courses',
  include: '**/*.mdx',
  schema: createDocSchema,
  transform: (document, context) =>
    transformMDX(document, context, transformMDXOptions),
});

const metas = defineCollection({
  name: 'meta',
  directory: 'content/courses',
  include: '**/meta.json',
  parser: 'json',
  schema: createMetaSchema,
});

export default defineConfig({
  collections: [courses, metas],
});
