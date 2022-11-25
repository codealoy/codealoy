import { Head, Html, Main, NextScript } from 'next/document';
import { COLORS } from '../constants/site-settings';

const themeScript = `
function updateTheme() {
  let theme = "light";
  try {
    const savedTheme = window.localStorage?.storageArea?.theme || window.localStorage?.theme;
    if (savedTheme === "dark") {
      theme = "dark";
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      theme = "light";
      document.documentElement.classList.remove("dark");
    }
  } catch {
    theme = "light";
    document.documentElement.classList.remove("dark");
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </Head>
      <body className="bg-white antialiased dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
