import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import React from 'react';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { BlogPosts } from '../components/home/BlogPosts';
import { Prose } from '../components/Prose';

interface BlogLayoutProps extends MarkdocNextJsPageProps {
  children?: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  markdoc,
  children,
}) => {
  const { title, authorName, authorAvatar, publishDate, authorProfession } =
    markdoc?.frontmatter!;

  return (
    <div>
      <Header />
      <section className="min-h-screen">
        <div>
          <main className="bg-white pt-8 pb-16 dark:bg-slate-900 lg:pt-16 lg:pb-24">
            <div className="mx-auto flex max-w-screen-xl justify-between px-4">
              <article className="mx-auto w-full max-w-3xl">
                <header className="mb-4 lg:mb-6">
                  <address className="mb-6 flex items-center not-italic">
                    <div className="mr-3 inline-flex items-center text-sm text-slate-900 dark:text-slate-300">
                      <img
                        className="mr-4 h-20 w-20 rounded-full"
                        src={authorAvatar}
                        alt={authorName}
                      />
                      <div>
                        <a
                          href="#"
                          rel="author"
                          className="text-xl font-medium text-slate-700 dark:text-slate-300"
                        >
                          {authorName}
                        </a>
                        <p className="text-base font-light text-slate-500 dark:text-slate-400">
                          {authorProfession}
                        </p>
                        <p className="text-base font-light text-slate-500 dark:text-slate-400">
                          <time
                            dateTime="2022-02-08"
                            title="February 8th, 2022"
                          >
                            {publishDate}
                          </time>
                        </p>
                      </div>
                    </div>
                  </address>
                  <h1 className="my-8 text-3xl font-extrabold leading-tight text-slate-800 dark:text-slate-200 lg:mb-6 lg:text-4xl">
                    {title}
                  </h1>
                </header>
                <div>
                  <Prose>{children}</Prose>
                </div>
              </article>
            </div>
          </main>

          {/* Latest Articles */}
          <aside
            aria-label="Related articles"
            className="bg-slate-50 py-8 dark:bg-slate-800 lg:py-24"
          >
            <div className="mx-auto max-w-screen-xl px-4">
              <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-slate-300">
                Latest articles
              </h2>
              <div className="mt-10">
                <BlogPosts limit={3} />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
};
