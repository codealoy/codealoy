import { CodeEditorTestList } from '../types/code-editor-tests';

export const generateDynamicTestsContent = (
  dynamicTests: CodeEditorTestList,
) => {
  if (!dynamicTests || dynamicTests?.length === 0) {
    return '';
  }

  let dynamicTestsContent = `import target from './function';\n\n`;

  for (const test of dynamicTests) {
    dynamicTestsContent += `test('${test.title || test.input}', () => {
  expect(target(${test.input})).${test.compareFunctionName}(${test.output});
});\n\n`;
  }

  return dynamicTestsContent;
};
