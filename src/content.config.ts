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

const coursesCollection = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    pageTitle: z.string(),
    title: z.string(),
    description: z.string(),
    level: z.string(),
    estimation: z.string(),
    lessons: z.string(),
    challenges: z.string(),
    playgrounds: z.string(),
    illustrations: z.string(),
    status: z.enum(['draft', 'published']).default('published'),
    coverImage: z.string().optional(),
    author: z.string().default('কোডালয় টিম'),
    publishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  }),
});

const lessonsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: z.object({
    pageTitle: z.string(),
    title: z.string(),
    description: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = {
  blog: blogCollection,
  courses: coursesCollection,
  lessons: lessonsCollection,
};
