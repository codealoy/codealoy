import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['.astro/**', 'dist/**'],
  },
  {
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
          project: './tsconfig.eslint.json',
        },
      },
    ],
  },
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];
