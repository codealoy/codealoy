import clsx from 'clsx';

import {
  useLoadingOverlayState,
  useSandpackClient,
} from '@codesandbox/sandpack-react';
import {
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

import { LoadingSpinner } from '~/client/components/LoadingSpinner';

export const ControllerButtons = ({
  editorOutput,
  setEditorOutput,
  isExecutingCode,
  setIsExecutingCode,
}) => {
  const { sandpack } = useSandpackClient();
  const loadingOverlayState = useLoadingOverlayState();

  const isButtonDisabled = sandpack.status !== 'running';

  const isEditorLoading =
    sandpack.status === 'initial' ||
    sandpack.status === 'idle' ||
    loadingOverlayState === 'LOADING';

  const runTests = () => {
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

  return isEditorLoading ? (
    <LoadingSpinner />
  ) : (
    <span className="flex">
      {controllerButtons.map(
        (btn) =>
          btn.isVisible && (
            <button
              key={btn.title}
              title={btn.title}
              onClick={btn.onClick}
              disabled={isButtonDisabled}
              className="m-auto flex h-8 w-7 transform cursor-pointer items-center justify-center transition duration-300 ease-in-out hover:scale-110 disabled:transform-none disabled:cursor-not-allowed disabled:text-slate-300 disabled:dark:text-slate-500"
            >
              <btn.icon
                className={clsx(
                  'w-4s h-4',
                  !isButtonDisabled &&
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
