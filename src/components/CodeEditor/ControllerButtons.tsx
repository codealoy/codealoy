import clsx from 'clsx';
import { useSandpackClient } from '@codesandbox/sandpack-react';
import {
  PlayIcon,
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline';

export const ControllerButtons = ({
  editorOutput,
  setEditorOutput,
  isExecutingCode,
  setIsExecutingCode,
}) => {
  const { sandpack } = useSandpackClient();

  const runTests = () => {
    console.log('clinets', sandpack.clients);
    console.log('status', sandpack.status);

    setIsExecutingCode(true);

    Object.values(sandpack.clients).forEach((client) => {
      client.dispatch({ type: 'run-all-tests' });
    });
  };

  const resetEditor = () => {
    sandpack.resetAllFiles();
    setEditorOutput(undefined);
  };

  const controllerButtons = [
    {
      title: 'Run',
      onClick: runTests,
      icon: PlayIcon,
      isVisible: !editorOutput && !isExecutingCode,
      animation: {
        shouldAnimate: false,
      },
    },
    {
      title: 'Run again',
      onClick: runTests,
      icon: ArrowPathIcon,
      isVisible: editorOutput || isExecutingCode,
      animation: {
        shouldAnimate: isExecutingCode,
        animationClass: 'animate-spin',
      },
    },
    {
      title: 'Reset code',
      onClick: resetEditor,
      icon: ArrowUturnLeftIcon,
      isVisible: true,
      animation: {
        shouldAnimate: false,
      },
    },
    {
      title: 'Open in CodeSandbox',
      onClick: () => {
        console.info('Button disabled');
      },
      icon: ArrowTopRightOnSquareIcon,
      isVisible: false,
      animation: {
        shouldAnimate: false,
      },
    },
  ];

  const isDisabled = sandpack.status !== 'running';

  return (
    <span className="flex">
      {controllerButtons.map(
        (btn) =>
          btn.isVisible && (
            <button
              key={btn.title}
              title={btn.title}
              onClick={btn.onClick}
              disabled={isDisabled}
              className="m-auto flex h-8 w-7 transform cursor-pointer items-center justify-center transition duration-300 ease-in-out hover:scale-110 disabled:transform-none disabled:cursor-not-allowed disabled:text-slate-300 disabled:dark:text-slate-500"
            >
              <btn.icon
                className={clsx(
                  'w-4s h-4',
                  !isDisabled &&
                    'hover:h-5 hover:w-5 hover:text-indigo-600 hover:dark:text-indigo-400',
                  btn.animation.shouldAnimate && btn.animation.animationClass,
                )}
              />
            </button>
          ),
      )}
    </span>
  );
};
