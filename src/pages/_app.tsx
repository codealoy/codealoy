import 'focus-visible';
import Head from 'next/head';

import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { Baloo_Da_2 } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';

import type { Session } from 'next-auth';
import type { AppType } from 'next/app';

import 'nprogress/nprogress.css';
import '~/client/styles/globals.css';
import '~/client/styles/tailwind.css';

import { Announcement } from '~/client/components/Announcement';
import { ProgressBar } from '~/client/components/ProgressBar';
import { ThemeContextProvider } from '~/client/contexts/ThemeContext';
import { BlogLayout } from '~/client/layouts/BlogLayout';
import { CourseLayout } from '~/client/layouts/CourseLayout';
import { Layout } from '~/client/layouts/Layout';
import { getNavigationItems } from '~/client/utils/getNavigationItems';
import { getPageTitle } from '~/client/utils/getPageTitle';
import { api } from '~/server/api';

const fontBengali = Baloo_Da_2({
  variable: '--font-bengali',
  subsets: ['bengali'],
});

interface MyAppProps extends MarkdocNextJsPageProps {
  session: Session | null;
  dehydratedState: unknown;
}

const MyApp: AppType<MyAppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [queryClient] = useState(() => new QueryClient());
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
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Head>
                <title>{pageTitle}</title>
                {description && (
                  <meta name="description" content={description} />
                )}
              </Head>
              <ProgressBar />
              <main className={fontBengali.className}>
                {showAnnouncement && (
                  <Announcement hideAnnouncement={hideAnnouncement} />
                )}
                {renderLayout()}
              </main>
            </Hydrate>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </SessionProvider>
      </ThemeContextProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
