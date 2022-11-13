import { getEditorErrorResult } from 'src/utils/getEditorErrorResult';

interface EditorResultTypes {
  key: string;
  title: string;
  input: string;
  expected: string;
  received: string;
  result: string;
}

export const getEditorResultParser = (editorOutput) => {
  let failedTestCount = 0;
  let testExecutionTime = 0;
  const editorResult: EditorResultTypes[] = [];

  if (editorOutput !== undefined) {
    Object.values(editorOutput).map((key: any) => {
      Object.values(key.tests).map((test: any) => {
        const errorMessage =
          test.status === 'fail'
            ? getEditorErrorResult(test.errors[0].message)
            : null;

        const [testTitle, testOutput, testInput] = test.name.split(' | ');
        const temp = {
          key: test.name,
          title: testTitle,
          input: testInput,
          status: test.status,
          expected: errorMessage ? errorMessage.Expected : testOutput,
          received: errorMessage ? errorMessage.Received : testOutput,
          result: test.status === 'fail' ? '❌' : '✅',
        };
        test.status === 'fail' ? failedTestCount++ : failedTestCount;
        testExecutionTime = testExecutionTime + test.duration;
        editorResult.push(temp);
      });
    });
  }
  return { editorResult, failedTestCount, testExecutionTime };
};
