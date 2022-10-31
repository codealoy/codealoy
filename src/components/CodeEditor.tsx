import React, { useContext } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import { aquaBlue, nightOwl } from '@codesandbox/sandpack-themes';

import { ThemeContext } from '../contexts/ThemeContext';
import { REACT_PRESET } from '../presets/react';

const CODE_SETUP_MAP = {
  test: REACT_PRESET,
};

const CodeEditor = ({ template, codeSetup }) => {
  const siteTheme = useContext(ThemeContext);
  return (
    <Sandpack
      theme={siteTheme.isDarkTheme ? nightOwl : aquaBlue}
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
