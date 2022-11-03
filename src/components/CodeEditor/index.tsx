import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackProvider,
  SandpackStack,
  SandpackTests,
} from '@codesandbox/sandpack-react';
import { aquaBlue, nightOwl } from '@codesandbox/sandpack-themes';
import { Tab } from '@headlessui/react';

import { ThemeContext } from '../../contexts/ThemeContext';
import { ControllerButtons } from './ControllerButtons';
import { TestResultViewer } from './TestResultViewer';

const CodeEditor = ({ template, boilerplate }) => {
  const siteTheme = useContext(ThemeContext);
  const [editorOutput, setEditorOutput] = React.useState<Record<string, any>>();
  const [isExecutingCode, setIsExecutingCode] = React.useState(false);

  const tabList = [
    {
      title: 'Result',
      content: <TestResultViewer editorOutput={editorOutput} />,
      isVisible: true,
    },
    {
      title: 'Console',
      content: 'Console component',
      isVisible: false,
    },
  ];

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
      <div className="overflow-hidden rounded-md bg-gray-50 shadow ring-1 ring-slate-300/10 dark:bg-slate-800/60">
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

          <div className="hidden">
            <SandpackTests
              watchMode={false}
              onComplete={(specs) => {
                /* =================================================================
               * Wait for test result bundle loader, to avoid render collision 
               * between CodeEditor component and Sandpack component. It also
               * gives time for loading 'run' button animation.
               =============================================================== */
                setTimeout(() => {
                  setEditorOutput(specs);
                  setIsExecutingCode(false);
                }, 500);
              }}
            />
          </div>

          {editorOutput && (
            <SandpackStack>
              <div className="min-h-[300px] bg-gray-50">
                <Tab.Group>
                  <Tab.List className="flex h-10 space-x-1 border-b px-2 ring-1 ring-slate-500/10">
                    {tabList.map(
                      (tab) =>
                        tab.isVisible && (
                          <Tab
                            key={tab.title}
                            className={({ selected }) =>
                              clsx(
                                'border-b-2 border-transparent px-2 text-xs font-medium capitalize leading-5 ring-indigo-600 focus:outline-none focus:ring-0',
                                selected
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'text-slate-500 hover:bg-indigo-100 hover:text-indigo-600',
                              )
                            }
                          >
                            {tab.title}
                          </Tab>
                        ),
                    )}
                  </Tab.List>
                  <Tab.Panels>
                    {tabList.map((tab) => (
                      <Tab.Panel key={tab.title}>{tab.content}</Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </SandpackStack>
          )}
        </SandpackLayout>
      </div>
    </SandpackProvider>
  );
};

export { CodeEditor };
