import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { Fragment, useContext, useState } from 'react';

import Highlight, { defaultProps } from 'prism-react-renderer';
import nightOwl from 'prism-react-renderer/themes/nightOwl';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';

import { ThemeContext } from '../contexts/ThemeContext';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';

const CopyButton = ({ content }: { content: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [, copy] = useCopyToClipboard();

  const onCopyButtonClick = () => {
    copy(content)
      .then((isSuccessful) => setIsCopied(isSuccessful))
      .then(() =>
        setTimeout(() => {
          setIsCopied(false);
        }, 1500),
      )
      .catch((e) => console.error(e));
  };

  return (
    <span className="absolute right-1 top-1 flex flex-col items-center">
      <button
        title={isCopied ? 'Copied' : 'Copy to clipboard'}
        onClick={onCopyButtonClick}
        className="cursor-pointer p-2 transition duration-300 ease-in-out hover:scale-110"
      >
        {isCopied ? (
          <ClipboardDocumentCheckIcon className="h-5 w-5 hover:text-indigo-600 hover:dark:text-indigo-400" />
        ) : (
          <ClipboardDocumentListIcon className="h-5 w-5 hover:text-indigo-600 hover:dark:text-indigo-400" />
        )}
      </button>
      <p
        className={clsx([
          'm-0 p-0 text-[10px]',
          isCopied ? 'inline-block' : 'hidden',
        ])}
      >
        Copied
      </p>
    </span>
  );
};

export const Fence = ({ children, language }: any) => {
  const siteTheme = useContext(ThemeContext);
  const codeContent = children.trimEnd();

  return (
    <Highlight
      {...defaultProps}
      code={codeContent}
      language={language}
      theme={siteTheme.isDarkTheme ? nightOwl : nightOwlLight}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <div className="relative">
          <CopyButton content={codeContent} />
          <pre className={className} style={style}>
            <code>
              {tokens.map((line, index) => (
                <Fragment key={index}>
                  {line.map((token, index) => (
                    <span key={index} {...getTokenProps({ token })} />
                  ))}
                  {'\n'}
                </Fragment>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};
