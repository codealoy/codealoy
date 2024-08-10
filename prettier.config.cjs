/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require.resolve('prettier-plugin-tailwindcss'),
    require.resolve('@trivago/prettier-plugin-sort-imports'),
  ],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/lib/(.*)$',
    '^@/components/(.*)$',
    '^./(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};

module.exports = config;
