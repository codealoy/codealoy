/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

import dynamicTests from './dynamic.test.js.json';

import { generateDynamicTestsContent } from '../../../../utils/generateDynamicTestsContent';
import { CodeEditorTestList } from '../../../../types/code-editor-tests';

// @ts-ignore
import functionDiyCode from './function.diy.js.txt';
// @ts-ignore
import functionSolution1Code from './function.solution1.js.txt';

export const boilerplate2TwoStringProblem1: SandpackProviderProps = {
  files: {
    '/function.js': {
      code: functionDiyCode,
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

export const boilerplate2TwoStringSolution1: SandpackProviderProps = {
  files: {
    '/function.js': {
      code: functionSolution1Code,
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
