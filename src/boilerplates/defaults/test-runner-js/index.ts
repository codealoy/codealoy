/**
 * @hidden
 */

import { SandpackProviderProps } from '@codesandbox/sandpack-react';

export const defaultBoilerplateForTestRunnerJs: SandpackProviderProps = {
  files: {
    'tsconfig.json': {
      code: `{
            "include": [
              "./**/*"
            ],
            "compilerOptions": {
              "strict": true,
              "esModuleInterop": true,
              "lib": [ "dom", "es2015" ],
              "jsx": "react-jsx"
            }
          }`,
      hidden: true,
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
