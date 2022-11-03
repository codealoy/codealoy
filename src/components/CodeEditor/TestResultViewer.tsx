import React from 'react';
import { SandpackStack, SandpackTests } from '@codesandbox/sandpack-react';

export const TestResultViewer = ({
  editorOutput,
  setEditorOutput,
  setIsExecutingCode,
}) => {
  return (
    <>
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
          <p>{JSON.stringify(editorOutput)}</p>
        </SandpackStack>
      )}
    </>
  );
};
