/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

export const boilerplate2IsUnique: SandpackProviderProps = {
  files: {
    '/function.js': {
      code: `const sub = (a, b) => a - b;
      
export default sub;`,
    },
    '/function.test.js': {
      code: `import testFn from "./function";

      test("2 - 1 = 1", () => {
        expect(testFn(2, 1)).toBe(1);
      });
      
      test("9 - 5 = 4", () => {
        expect(testFn(9, 5)).toBe(4);
      });
      `,
      readOnly: false,
      hidden: true,
    },
  },
  options: {},
  customSetup: {},
};
