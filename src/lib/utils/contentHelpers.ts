import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

export type BlogPost = {
  slug: string;
  title: string;
  publishedOn: string;
  summary: string;
};

export async function getBlogPostList() {
  const fileNames = await readDirectory('/content/courses');

  const blogPosts: BlogPost[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace('.mdx', ''),
      title: frontmatter.title,
      publishedOn: frontmatter.publishedOn,
      summary: frontmatter.summary,
    });
  }

  return blogPosts.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadBlogPost = React.cache(async function loadBlogPost(
  slug: string[],
) {
  console.log(`🐞🐞🐞 --------------------🐞🐞🐞`);
  console.log(`🐞🐞🐞 ~ slug:`, slug);
  console.log(`🐞🐞🐞 --------------------🐞🐞🐞`);

  const filePath = slug.join('/');
  console.log(`🐞🐞🐞 ----------------------------🐞🐞🐞`);
  console.log(`🐞🐞🐞 ~ filePath:`, filePath);
  console.log(`🐞🐞🐞 ----------------------------🐞🐞🐞`);

  const rawContent = await readFile(`/content/courses/${filePath}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
});

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
