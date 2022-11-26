import clsx from 'clsx';
import Head from 'next/head';
import NextLink from 'next/link';
import styles from '../styles/index.module.css';

import { CTA } from '../components/home/CTA';
import { FAQ } from '../components/home/FAQ';
import { FeatureGrid } from '../components/home/FeatureGrid';
import { LatestBlogPosts } from '../components/home/LatestBlogPosts';
import { LiveCodingFeature } from '../components/home/LiveCodingFeature';
import { Team } from '../components/home/Team';
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

      <FeatureGrid />

      <LiveCodingFeature />

      <FAQ />

      <LatestBlogPosts />

      <Team />

      <CTA />
    </>
  );
};

export default IndexPage;
