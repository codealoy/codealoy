/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  useTabs: false,
  bracketSpacing: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
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
