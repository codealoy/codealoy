import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
} from '@codesandbox/sandpack-react';
import { aquaBlue, nightOwl } from '@codesandbox/sandpack-themes';
import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { ControllerButtons } from './ControllerButtons';
import { TestResultViewer } from './TestResultViewer';

const CodeEditor = ({ template, boilerplate }) => {
  const siteTheme = useContext(ThemeContext);
  const [editorOutput, setEditorOutput] = React.useState<Record<string, any>>();
  const [isExecutingCode, setIsExecutingCode] = React.useState(false);

  return (
    <SandpackProvider
      theme={siteTheme.isDarkTheme ? nightOwl : aquaBlue}
      options={{
        autorun: true,
        initMode: 'user-visible',
        recompileMode: 'delayed',
      }}
      files={{
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
      }}
      customSetup={{
        dependencies: {},
        devDependencies: {
          typescript: '^4.0.0',
        },
        entry: '/function.js',
        environment: 'parcel',
      }}
    >
      <div className="overflow-hidden rounded-md shadow ring-1 ring-slate-300/10">
        <div className="flex h-12 flex-row items-center justify-between rounded-t bg-gray-100 px-4 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300">
          <p className="text-sm font-semibold">Code editor title</p>
          <ControllerButtons
            editorOutput={editorOutput}
            setEditorOutput={setEditorOutput}
            isExecutingCode={isExecutingCode}
            setIsExecutingCode={setIsExecutingCode}
          />
        </div>

        <SandpackLayout style={{ borderRadius: '0 0 8px 8px' }}>
          <SandpackCodeEditor
            showRunButton={false}
            readOnly={false}
            showTabs={template === 'test-js' ? false : true}
            showLineNumbers={true}
            showInlineErrors={false}
            wrapContent={true}
          />

          <TestResultViewer
            editorOutput={editorOutput}
            setEditorOutput={setEditorOutput}
            setIsExecutingCode={setIsExecutingCode}
          />
        </SandpackLayout>
      </div>
    </SandpackProvider>
  );
};

export { CodeEditor };
