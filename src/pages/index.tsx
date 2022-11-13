import clsx from 'clsx';
import Head from 'next/head';
import NextLink from 'next/link';
import styles from '../styles/index.module.css';

import { Features } from '../components/home/Features';
import { BlogPosts } from '../components/home/BlogPosts';
import { Team } from '../components/home/Team';
import { CTA } from '../components/home/CTA';
import { FAQ } from '../components/home/FAQ';
import { LiveCodingFeature } from '../components/home/LiveCodingFeature';
import { SITE_TITLE } from '../constants/site-settings';

const IndexPage = () => {
  return (
    <>
      <Head>
        <meta key="twitter:title" name="twitter:title" content={SITE_TITLE} />
        <meta key="og:title" property="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <div
        className={clsx(
          '-mt-[76px] flex h-screen items-center justify-center space-y-20 overflow-hidden sm:space-y-32 md:space-y-40',
          styles.beams,
        )}
      >
        <div className="relative mx-auto max-w-5xl">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            কোড + বিদ্যালয় = কোডালয়
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
            মাতৃভাষা বাংলায় প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শেখার
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              {' '}
              সম্পূর্ণ ফ্রি
            </code>
            , এবং{' '}
            <code className="font-mono font-medium text-sky-500 dark:text-sky-400">
              ওপেনসোর্স
            </code>{' '}
            প্লাটফর্ম
          </p>
          <div className="mt-6 flex justify-center space-x-6 text-sm sm:mt-10">
            <NextLink href="/courses">
              <a className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto">
                শেখা শুরু করুন
              </a>
            </NextLink>
          </div>
        </div>
      </div>

      <Features />
      <LiveCodingFeature />
      <Team />

      {/* Blog Posts Section */}
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 dark:border-t dark:border-slate-100/5 dark:bg-slate-900 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white dark:bg-slate-900 sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              From the blog
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 dark:text-slate-300 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mt-12">
            <BlogPosts limit={3} />
          </div>
        </div>
      </div>

      <FAQ />
      <CTA />
    </>
  );
};

export default IndexPage;
