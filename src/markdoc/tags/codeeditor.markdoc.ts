import { CodeEditor as CodeEditorComponent } from '../../components/CodeEditor';

export const CodeEditor = {
  render: CodeEditorComponent,
  description: 'Live code editor & test runner',
  attributes: {
    template: {
      type: String,
      matches: ['react'],
      errorLevel: 'critical',
    },
    boilerplate: {
      type: String,
      errorLevel: 'critical',
    },
  },
};
