import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import React from 'react';
import Image from 'next/image';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { BlogPosts } from '../components/BlogPosts';
import { Prose } from '../components/Prose';
import { dayjs } from '../utils/dayjs';
import coverImageBlurDataUrl from '../images/common/cover-image-blur';
import { Divider } from '../components/Divider';
import Link from 'next/link';

interface BlogLayoutProps extends MarkdocNextJsPageProps {
  children?: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  markdoc,
  children,
}) => {
  const { title, authorName, authorAvatar, publishedAt, authorProfession } =
    markdoc?.frontmatter!;

  const publishedAtEn = dayjs(publishedAt).locale('en').format('YYYY-MM-DD');
  const publishedAtBn = dayjs(publishedAt).format('LL');

  return (
    <>
      <Header />
      <section className="min-h-screen">
        <main className="bg-white pt-8 pb-16 dark:bg-slate-900 lg:pt-16 lg:pb-24">
          <div className="mx-auto flex max-w-screen-xl justify-between px-4">
            <article className="mx-auto w-full max-w-3xl">
              <header className="mb-4 lg:mb-6">
                <address className="mb-6 flex items-center not-italic">
                  <div className="mr-3 inline-flex items-center text-sm text-slate-900 dark:text-slate-300">
                    <div className="mr-4 h-20 w-20 overflow-hidden rounded-full">
                      <Image
                        src={authorAvatar}
                        alt={authorName}
                        width={80}
                        height={80}
                        placeholder="blur"
                        loading="lazy"
                        blurDataURL={coverImageBlurDataUrl}
                      />
                    </div>
                    <div>
                      <Link
                        href="#"
                        rel="author"
                        className="text-xl font-medium text-slate-700 dark:text-slate-300"
                      >
                        {authorName}
                      </Link>
                      <p className="text-base font-light text-slate-500 dark:text-slate-400">
                        {authorProfession}
                      </p>
                      <p className="text-base font-light text-slate-500 dark:text-slate-400">
                        <time dateTime={publishedAtEn} title={publishedAtBn}>
                          {publishedAtBn}
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
        <Divider />
        <aside
          aria-label="Related articles"
          className="bg-white py-8 dark:bg-slate-900 lg:py-24"
        >
          <div className="mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-300">
              সাম্প্রতিক ব্লগসমূহ
            </h2>
            <div className="mt-10">
              <BlogPosts limit={3} />
            </div>
          </div>
        </aside>
      </section>
      <Divider />
      <Footer />
    </>
  );
};
