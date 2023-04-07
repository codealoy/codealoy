/**
 * @hidden
 */

import type { SandpackProviderProps } from '@codesandbox/sandpack-react';

// @ts-ignore
import tsconfigCode from './tsconfig.json.txt';
// @ts-ignore
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
