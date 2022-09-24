// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import superjson from "superjson";
import type { AppType } from "next/app";
import type { AppRouter } from "../server/router";
import type { Session } from "next-auth";
import "../styles/globals.css";

import Head from "next/head";
import { slugifyWithCounter } from "@sindresorhus/slugify";

import { Layout } from "../components/Layout";

import "focus-visible";
import "../styles/tailwind.css";

const navigation = [
  {
    title: "Introduction",
    links: [
      { title: "Getting started", href: "/" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Core concepts",
    links: [
      { title: "Understanding caching", href: "/docs/understanding-caching" },
      {
        title: "Predicting user behavior",
        href: "/docs/predicting-user-behavior",
      },
      { title: "Basics of time-travel", href: "/docs/basics-of-time-travel" },
      {
        title: "Introduction to string theory",
        href: "/docs/introduction-to-string-theory",
      },
      { title: "The buttery effect", href: "/docs/the-butterfly-effect" },
    ],
  },
  {
    title: "Advanced guides",
    links: [
      { title: "Writing plugins", href: "/docs/writing-plugins" },
      { title: "Neuralink integration", href: "/docs/neuralink-integration" },
      { title: "Temporal paradoxes", href: "/docs/temporal-paradoxes" },
      { title: "Testing", href: "/docs/testing" },
      { title: "Compile-time caching", href: "/docs/compile-time-caching" },
      {
        title: "Predictive data generation",
        href: "/docs/predictive-data-generation",
      },
    ],
  },
  {
    title: "API reference",
    links: [
      { title: "CacheAdvance.predict()", href: "/docs/cacheadvance-predict" },
      { title: "CacheAdvance.flush()", href: "/docs/cacheadvance-flush" },
      { title: "CacheAdvance.revert()", href: "/docs/cacheadvance-revert" },
      { title: "CacheAdvance.regret()", href: "/docs/cacheadvance-regret" },
    ],
  },
  {
    title: "Contributing",
    links: [
      { title: "How to contribute", href: "/docs/how-to-contribute" },
      { title: "Architecture guide", href: "/docs/architecture-guide" },
      { title: "Design principles", href: "/docs/design-principles" },
    ],
  },
];

function getNodeText(node) {
  let text = "";
  for (const child of node.children ?? []) {
    if (typeof child === "string") {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
}

function collectHeadings(nodes: any, slugify = slugifyWithCounter()) {
  const sections: any = [];

  console.log(`🐞🐞🐞 nodes:`, JSON.stringify(nodes));
  if (nodes.length) {
    for (const node of nodes) {
      if (/^h[23]$/.test(node.name)) {
        const title = getNodeText(node);
        if (title) {
          const id = slugify(title);
          node.attributes.id = id;
          if (node.name === "h3") {
            sections[sections.length - 1].children.push({
              ...node.attributes,
              title,
            });
          } else {
            sections.push({ ...node.attributes, title, children: [] });
          }
        }
      }

      sections.push(...collectHeadings(node.children ?? [], slugify));
    }
  }
  return sections;
}

const MyApp: AppType<{ session: Session | null; markdoc: any }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const title = pageProps.markdoc?.frontmatter.title;

  const pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Docs`;

  const description = pageProps.markdoc?.frontmatter.description;
  const markdocContent = pageProps.markdoc?.content;
  const isMarkdocContentObject =
    typeof pageProps.markdoc.content === "object" &&
    !Array.isArray(markdocContent);

  const tableOfContents = markdocContent
    ? collectHeadings(
        isMarkdocContentObject ? [markdocContent] : [...markdocContent]
      )
    : [];

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>{pageTitle}</title>
          {description && <meta name="description" content={description} />}
        </Head>
        <Layout
          navigation={navigation}
          title={title}
          tableOfContents={tableOfContents}
        >
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
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
