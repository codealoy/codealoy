/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && import('./src/env.mjs');

const withMarkdoc = require('@markdoc/next.js');

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

module.exports = withMarkdoc({
  schemaPath: './src/client/markdoc',
})(
  defineNextConfig({
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ['md', 'js', 'jsx', 'ts', 'tsx'],
    // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
      locales: ['bn-BD'],
      defaultLocale: 'bn-BD',
    },
    images: {
      domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.txt/,
        type: 'asset/source',
      });

      return config;
    },
  }),
);
