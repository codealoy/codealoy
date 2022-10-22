import React from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { REACT_PRESET } from '../presets/react';

const CODE_SETUP_MAP = {
  test: REACT_PRESET,
};

const CodeEditor = ({ template, codeSetup }) => {
  return (
    <Sandpack
      theme={nightOwl}
      template={template}
      customSetup={CODE_SETUP_MAP[codeSetup]}
      options={{
        readOnly: false,
        showNavigator: true,
        showTabs: true,
        showLineNumbers: true,
        showInlineErrors: true,
        wrapContent: true,
        autorun: false,
        showConsole: false,
        showConsoleButton: true,
        closableTabs: true,
      }}
    />
  );
};

export { CodeEditor };
