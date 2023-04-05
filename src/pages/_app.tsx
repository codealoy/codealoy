import 'focus-visible';
import Head from 'next/head';
import { Baloo_Da_2 } from 'next/font/google';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SessionProvider } from 'next-auth/react';

import type { AppType } from 'next/app';
import type { Session } from 'next-auth';

import 'nprogress/nprogress.css';
import '~/styles/globals.css';
import '~/styles/tailwind.css';

import { Announcement } from '../components/Announcement';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { CourseLayout } from '../layouts/CourseLayout';
import { Layout } from '../layouts/Layout';
import { getPageTitle } from '../utils/getPageTitle';
import { getNavigationItems } from '../utils/getNavigationItems';
import { BlogLayout } from '../layouts/BlogLayout';
import { ProgressBar } from '../components/ProgressBar';
import { api } from '~/server/api';

const fontBengali = Baloo_Da_2({
  variable: '--font-bengali',
  subsets: ['bengali'],
});

interface MyAppProps extends MarkdocNextJsPageProps {
  session: Session | null;
}

const MyApp: AppType<MyAppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();

  // INFO: this will only match "/couses/courseName/moduleName" pattern, but not "/courses"
  const isCourseDetailPage = router.pathname.match(/courses\/\S+/i);

  // INFO: this will only match "/blog/blog-slug" pattern, but not "/blog"
  const isBlogDetailPage = router.pathname.match(/blog\/\S+/i);

  const pageTitle = getPageTitle(pageProps);
  const description = pageProps.markdoc?.frontmatter.description;

  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const renderLayout = () => {
    if (isCourseDetailPage) {
      const navigationItems = getNavigationItems({
        scope: 'COURSES',
        routePath: router.pathname,
      });

      return (
        <CourseLayout navigationItems={navigationItems} {...pageProps}>
          <Component {...pageProps} />
        </CourseLayout>
      );
    }

    if (isBlogDetailPage) {
      return (
        <BlogLayout {...pageProps}>
          <Component {...pageProps} />
        </BlogLayout>
      );
    }

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  const hideAnnouncement = () => {
    setShowAnnouncement((previousValue) => !previousValue);
  };

  return (
    <>
      <ThemeContextProvider>
        <SessionProvider session={session}>
          <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
          </Head>
          <ProgressBar />
          <main className={fontBengali.className}>
            {showAnnouncement && (
              <Announcement hideAnnouncement={hideAnnouncement} />
            )}
            {renderLayout()}
          </main>
        </SessionProvider>
      </ThemeContextProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
