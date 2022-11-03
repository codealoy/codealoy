import { CodeEditor as CodeEditorComponent } from '../../components/CodeEditor';

export const CodeEditor = {
  render: CodeEditorComponent,
  description: 'Live code editor & test runner',
  attributes: {
    template: {
      type: String,
      required: true,
      matches: ['react', 'test-runner-js'],
      errorLevel: 'critical',
    },
    boilerplate: {
      type: String,
      required: true,
      errorLevel: 'critical',
    },
  },
};
