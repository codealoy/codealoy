/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  printWidth: 80,
  useTabs: false,
  bracketSpacing: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss',
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  importOrder: [
    '^react$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/types$',
    '',
    '^@/config/(.*)$',
    '',
    '^@/lib/(.*)$',
    '',
    '^@/components/(.*)$',
  ],
};

export default config;
