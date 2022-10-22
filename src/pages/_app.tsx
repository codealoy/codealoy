import "focus-visible";

import Head from "next/head";
import superjson from "superjson";

import { MarkdocNextJsPageProps } from "@markdoc/next.js";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import { GuideLayout } from "../layouts/GuideLayout";
import { Layout } from "../layouts/Layout";
import { getBaseUrl } from "../utils/getBaseUrl";
import { getPageTitle } from "../utils/getPageTitle";

import type { Session } from "next-auth";
import type { AppType } from "next/app";
import type { AppRouter } from "../server/router";

import "../styles/globals.css";
import "../styles/tailwind.css";
import { Announcement } from "../components/Announcement";
import { useState } from "react";

interface MyAppProps extends MarkdocNextJsPageProps {
  session: Session | null;
}

const MyApp: AppType<MyAppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const isDocPage = router.pathname.includes("/docs");
  const pageTitle = getPageTitle(pageProps);
  const description = pageProps.markdoc?.frontmatter.description;

  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const renderLayout = () => {
    if (isDocPage) {
      return (
        <GuideLayout {...pageProps}>
          <Component {...pageProps} />
        </GuideLayout>
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
      <SessionProvider session={session}>
        <Head>
          <title>{pageTitle}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        {showAnnouncement && (
          <Announcement hideAnnouncement={hideAnnouncement} />
        )}
        {renderLayout()}
      </SessionProvider>
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
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
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
