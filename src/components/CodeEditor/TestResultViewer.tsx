import React from 'react';

interface TestResultViewerProps {
  editorOutput: Record<string, any> | undefined;
  isExecutingCode: boolean;
}

const resultTableColumns = [
  {
    title: 'S/N',
    dataIndex: '',
    key: 'serialNumber',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Input',
    dataIndex: 'input',
    key: 'input',
  },
  {
    title: 'Expected',
    dataIndex: 'expected',
    key: 'expected',
  },
  {
    title: 'Received',
    dataIndex: 'received',
    key: 'received',
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result',
  },
];

const resultTableDataSource = [
  {
    key: '1',
    title: '[1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    expected: '9',
    received: '1',
    result: '❌',
  },
  {
    key: '2',
    title: 'Exported value is a function',
    expected: 'function',
    received: 'boolean',
    result: '❌',
  },
  {
    key: '3',
    title: '[1, 2, 3, 4, 5]',
    expected: '9',
    received: '1',
    result: '✅',
  },
  {
    key: '4',
    title: '[1, 2, 3, 4, 5]',
    expected: '9',
    received: '1',
    result: '❌',
  },
  {
    key: '5',
    title: '[1, 2, 3, 4, 5]',
    expected: '9',
    received: '1',
    result: '❌',
  },
  {
    key: '6',
    title: '[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]',
    expected: '9',
    received: '1',
    result: '❌',
  },
];

const TestResultTable = ({ editorOutput }) => {
  let failedTestCount = 0;
  console.log({ editorOutput });

  const editorResult: any = [];

  const getErrorResult = (message) => {
    console.log({ message });
    const textMessage = message.replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()\n'']/g,
      ' ',
    );
    const messageArray = textMessage.split(' ');
    if (messageArray[15] !== messageArray[18]) {
      return {
        Expected: messageArray[15].replace(/^"(.*)"$/, '$1'),
        Received: messageArray[18].replace(/^"(.*)"$/, '$1'),
      };
    }
  };

  if (editorOutput !== undefined) {
    Object.values(editorOutput).map((key: any) => {
      Object.values(key.tests).map((test: any) => {
        console.log({ test });
        const errorMessage =
          test.status === 'fail'
            ? getErrorResult(test.errors[0].message)
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
        editorResult.push(temp);
      });
    });
  }
  console.log({ editorResult });
  console.log({ failedTestCount });

  return (
    <div className="flex flex-col">
      <div className="flex justify-center px-2 text-sm font-semibold">
        {failedTestCount > 0 ? (
          <p className=" text-red-500">
            {failedTestCount} of {editorResult.length} Tests Failed
          </p>
        ) : (
          <p className=" text-green-500">All Tests Passed</p>
        )}
      </div>
      <div className="h-48 overflow-auto">
        <table className="m-0 min-w-full table-auto border dark:border-slate-800/60">
          <thead className="bg-gray-100 dark:bg-slate-800/60">
            <tr>
              {resultTableColumns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="border border-gray-200 p-2 text-center text-xs text-slate-600 dark:border-slate-600/80 dark:text-slate-400"
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {editorResult.map((data, index) => {
              console.log({ data });
              return (
                <tr
                  key={data.key}
                  className="text-center font-medium text-slate-600 dark:text-slate-300"
                >
                  {resultTableColumns.map((column) => (
                    <td key={`${data.key}-${column.key}`} className="px-2">
                      <span>
                        {column.key === 'serialNumber'
                          ? index + 1
                          : data[column.dataIndex]}
                      </span>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const CodeExecutionLoader = () => {
  return (
    <div className="flex min-h-[260px] items-center justify-center">
      <div className="flex items-center">
        <div className="relative h-4 w-4 animate-spin rounded-full bg-gradient-to-r from-indigo-500 to-sky-500">
          <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gray-50 dark:bg-[#112133]" />
        </div>
        <p className="m-0 ml-2 block text-center text-base font-medium text-slate-400 dark:text-slate-500">
          Executing your code...
        </p>
      </div>
    </div>
  );
};

export const TestResultViewer = ({
  editorOutput,
  isExecutingCode,
}: TestResultViewerProps) => {
  return (
    <>
      {(isExecutingCode || editorOutput) && (
        <div className="bg-gray-50 dark:bg-transparent">
          <div className="relative">
            <span className="absolute -top-7 right-2 text-xs font-medium text-slate-400">
              <p className="inline">Time: 0.004s</p>
            </span>
            {isExecutingCode ? (
              <CodeExecutionLoader />
            ) : (
              <TestResultTable editorOutput={editorOutput} />
            )}
          </div>
        </div>
      )}
    </>
  );
};
