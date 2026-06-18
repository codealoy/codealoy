import type { APIRoute } from 'astro';
import { getCollection, getEntry } from 'astro:content';

import { buildContentMarkdown, markdownResponse } from '@/lib/agentReadable';

// Clean-markdown endpoint for blog posts, e.g. /blog/welcome-to-codealoy.md
export async function getStaticPaths() {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.status === 'published',
  );

  return posts.map((post) => ({
    params: { slug: post.data.slug },
    props: { slug: post.data.slug },
  }));
}

const dateFormatter = new Intl.DateTimeFormat('bn-BD', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export const GET: APIRoute = async ({ props }) => {
  const { slug } = props as { slug: string };

  const post = await getEntry('blog', slug);

  if (!post) {
    return new Response('Not found', { status: 404 });
  }

  const markdown = buildContentMarkdown({
    title: post.data.title,
    description: post.data.description,
    body: post.body ?? '',
    canonicalPath: `/blog/${post.data.slug}`,
    meta: {
      লেখক: post.data.author,
      প্রকাশ: dateFormatter.format(post.data.publishedAt),
    },
  });

  return markdownResponse(markdown);
};
