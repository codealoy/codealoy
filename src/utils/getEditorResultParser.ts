import { getEditorErrorResult } from 'src/utils/getEditorErrorResult';

interface EditorResultTypes {
  key: string;
  title: string;
  status: 'fail' | 'pass';
  input: string;
  expected: string;
  received: string;
  result: string;
}

interface GetEditorResultParserReturnType {
  editorResult: EditorResultTypes[];
  failedTestCount: number;
  testExecutionTime: number;
}

export const getEditorResultParser = (
  editorOutput: Record<string, any> | undefined,
): GetEditorResultParserReturnType => {
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

        editorResult.push({
          key: test.name,
          title: testTitle,
          input: testInput,
          status: test.status,
          expected: errorMessage ? errorMessage.Expected : testOutput,
          received: errorMessage ? errorMessage.Received : testOutput,
          result: test.status === 'fail' ? '❌' : '✅',
        });

        test.status === 'fail' ? failedTestCount++ : failedTestCount;
        testExecutionTime = testExecutionTime + test.duration;
      });
    });
  }
  return { editorResult, failedTestCount, testExecutionTime };
};
