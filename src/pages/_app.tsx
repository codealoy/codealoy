import 'focus-visible';

import Head from 'next/head';
import superjson from 'superjson';
import { Baloo_Da_2 } from '@next/font/google';

import '../styles/globals.css';
import '../styles/tailwind.css';

import type { Session } from 'next-auth';
import type { AppType } from 'next/app';
import type { AppRouter } from '../server/router';

import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { withTRPC } from '@trpc/next';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Announcement } from '../components/Announcement';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import { CourseLayout } from '../layouts/CourseLayout';
import { Layout } from '../layouts/Layout';
import { getBaseUrl } from '../utils/getBaseUrl';
import { getPageTitle } from '../utils/getPageTitle';
import { getNavigationItems } from '../utils/getNavigationItems';
import { BlogLayout } from '../layouts/BlogLayout';

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

  const [showAnnouncement, setShowAnnouncement] = useState(false);

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
    setShowAnnouncement(false);
  };

  return (
    <>
      <ThemeContextProvider>
        <SessionProvider session={session}>
          <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description} />}
          </Head>
          <main className={`${fontBengali.variable} font-sans`}>
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

export default withTRPC<AppRouter>({
  config() {
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({ url }),
      ],
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },

      // To use SSR properly you need to forward the client's headers to the server
      // headers: () => {
      //   if (ctx?.req) {
      //     const headers = ctx?.req?.headers;
      //     delete headers?.connection;
      //     return {
      //       ...headers,
      //       "x-ssr": "1",
      //     };
      //   }
      //   return {};
      // }
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
