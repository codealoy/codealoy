import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const patchedConfig = fixupConfigRules([
  ...compat.extends('plugin:@next/next/recommended'),
]);

const config = [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...patchedConfig,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    ignores: [
      '**/.*',
      'node_modules/',
      'dist/',
      'build/',
      'out/',
      'public/',
      '.next/',
    ],
  },
];

export default config;
