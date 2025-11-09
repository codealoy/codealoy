import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    status: z.enum(['draft', 'published']),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    author: z.string().default('কোডালয় টিম'),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
