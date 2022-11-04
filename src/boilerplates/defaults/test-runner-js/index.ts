// @ts-nocheck
/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

import tsconfigCode from './tsconfig.json.txt';
import baseTestCode from './base.test.js.txt';

export const defaultBoilerplateForTestRunnerJs: SandpackProviderProps = {
  files: {
    'tsconfig.json': {
      code: tsconfigCode,
      hidden: true,
      readOnly: true,
    },
    'base.test.js': {
      code: baseTestCode,
      hidden: true,
      readOnly: true,
    },
  },
  options: {
    autorun: true,
    initMode: 'lazy',
    recompileMode: 'delayed',
  },
  customSetup: {
    dependencies: {},
    devDependencies: {
      typescript: '^4.0.0',
    },
    entry: '/function.js',
    environment: 'parcel',
  },
};
