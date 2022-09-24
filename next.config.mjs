// import { env } from "./src/env/server.mjs";
import withMarkdoc from "@markdoc/next.js";

/** @type {import('next').NextConfig} */

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default withMarkdoc({
  schemaPath: "./src/markdoc",
})(
  defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["md", "js", "jsx", "ts", "tsx"],
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
      locales: ["en"],
      defaultLocale: "en",
    },
  })
);
