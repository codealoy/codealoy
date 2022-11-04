/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

import dynamicTests from './dynamic.test.js.json';

import { generateDynamicTestsContent } from '../../../../utils/generateDynamicTestsContent';
import { CodeEditorTestList } from '../../../../types/code-editor-tests';

// @ts-ignore
import functionCode from './function.js.txt';
// @ts-ignore
import staticTestCode from './static.test.js.txt';

export const boilerplate2IsUnique: SandpackProviderProps = {
  files: {
    '/function.js': {
      code: functionCode,
    },
    '/static.test.js': {
      code: staticTestCode,
      readOnly: true,
      hidden: true,
    },
    '/dynamic.test.js': {
      code: generateDynamicTestsContent(dynamicTests as CodeEditorTestList),
      readOnly: true,
      hidden: true,
    },
  },
  options: {},
  customSetup: {},
};
