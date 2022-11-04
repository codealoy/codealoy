// @ts-nocheck
/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

import functionCode from './function.txt';
import functionTestCode from './function.test.txt';

export const boilerplate2IsUnique: SandpackProviderProps = {
  files: {
    '/function.js': {
      code: functionCode,
    },
    '/function.test.js': {
      code: functionTestCode,
      readOnly: true,
      hidden: true,
    },
  },
  options: {},
  customSetup: {},
};
