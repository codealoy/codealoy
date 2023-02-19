import React from 'react';
import { getEditorResultParser } from 'src/utils/getEditorResultParser';

import { LoadingSpinner } from '../LoadingSpinner';

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

const TestResultTable = ({ editorOutput }) => {
  const { editorResult, failedTestCount } = getEditorResultParser(editorOutput);

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
          <thead className="bg-white sticky top-0 dark:bg-slate-800/60">
            <tr >
              {resultTableColumns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className=" border-gray-200 p-2 text-center text-xs text-slate-600 dark:border-slate-600/80 dark:text-slate-400 after:content-[''] after:absolute  after:top-0 after:left-0  after:w-full after:h-8 after:border after:border-gray-200 
                  after:dark:border-slate-600/80
                  "

                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-auto">
            {editorResult.map((data, index) => {
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
        <LoadingSpinner />
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
  const { testExecutionTime } = getEditorResultParser(editorOutput);
  return (
    <>
      {(isExecutingCode || editorOutput) && (
        <div className="bg-gray-50 dark:bg-transparent">
          <div className="relative">
            <span className="absolute -top-7 right-2 text-xs font-medium text-slate-400">
              <p className="inline">{testExecutionTime / 1000}s</p>
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
