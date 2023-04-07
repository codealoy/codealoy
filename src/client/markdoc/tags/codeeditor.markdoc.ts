import { CodeEditor as CodeEditorComponent } from '~/client/components/CodeEditor';
import {
  CODE_EDITOR_BOILERPLATE_CATEGORIES_ARRAY,
  CODE_EDITOR_TEMPLATES_ARRAY,
} from '~/client/constants/code-editor';

export const CodeEditor = {
  render: CodeEditorComponent,
  description: 'Live code editor & test runner',
  attributes: {
    title: {
      type: String,
      required: false,
    },
    template: {
      type: String,
      required: true,
      matches: CODE_EDITOR_TEMPLATES_ARRAY,
      errorLevel: 'critical',
    },
    boilerplate: {
      type: String,
      required: true,
      errorLevel: 'critical',
    },
    boilerplateCategory: {
      type: String,
      required: true,
      matches: CODE_EDITOR_BOILERPLATE_CATEGORIES_ARRAY,
      errorLevel: 'critical',
    },
  },
};
