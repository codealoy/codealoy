import { Head, Html, Main, NextScript } from 'next/document';
import { COLORS, SITE_TITLE } from '~/client/constants/site-settings';

const themeScript = `
function updateTheme() {
  let theme = "dark";
  try {
    const savedTheme = window.localStorage?.storageArea?.theme || window.localStorage?.theme;
    if (savedTheme === "dark") {
      theme = "dark";
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      theme = "dark";
      document.documentElement.classList.add("dark");
    }
  } catch {
    theme = "dark";
    document.documentElement.classList.add("dark");
  }
  return theme;
}

document.documentElement.setAttribute("data-theme", updateTheme());

new MutationObserver(([{ oldValue }]) => {
  let newValue = document.documentElement.getAttribute("data-theme");
  if (newValue !== oldValue) {
    try {
      window.localStorage.setItem("theme", newValue);
    } catch {}
    updateTheme();
  }
}).observe(document.documentElement, {
  attributeFilter: ["data-theme"],
  attributeOldValue: true,
});

window.addEventListener("storage", updateTheme);

`;

export default function Document() {
  return (
    <Html
      className="scroll-smooth antialiased [font-feature-settings:'ss01']"
      lang="bn"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicon/safari-pinned-tab.svg"
          color={COLORS.PRIMARY}
        />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content={COLORS.PRIMARY} />
        <meta
          name="msapplication-config"
          content="/static/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content={COLORS.PRIMARY} />

        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:site_name" content="কোডালয় | Codealoy" />
        <meta property="og:url" content="https://www.codealoy.com" />
        <meta
          property="og:description"
          content="মাতৃভাষা বাংলায় প্রোগ্রামিং এবং ওয়েব ডেভেলপমেন্ট শেখার সম্পূর্ণ ফ্রি, এবং ওপেনসোর্স প্লাটফর্ম"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/static/images/og/codealoy-social-card-6654c734ccab8f440ff0825eb443dc7f.png"
        />
        <meta property="og:image:width" content="1479" />
        <meta property="og:image:height" content="832" />
        <meta key="twitter:title" name="twitter:title" content={SITE_TITLE} />
        <meta key="og:title" property="og:title" content={SITE_TITLE} />

        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="bg-white antialiased dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
