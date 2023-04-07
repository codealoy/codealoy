import { SandpackProviderProps } from '@codesandbox/sandpack-react';
import { courseBoilerplates } from '~/client/boilerplates/courses';
import { CODE_EDITOR_BOILERPLATE_CATEGORIES } from '~/client/constants/code-editor';
import {
  CodeEditorBoilerplateCategoires,
  CodeEditorBoilerplates,
} from '~/client/types/code-editor-types';
import { getCourseAndModuleFromBoilerplate } from './getCourseAndModuleFromBoilerplate';

export interface GetCustomBoilerplateParams {
  boilerplate: CodeEditorBoilerplates;
  boilerplateCategory: CodeEditorBoilerplateCategoires;
}

export const getCustomBoilerplate = ({
  boilerplate,
  boilerplateCategory,
}: GetCustomBoilerplateParams):
  | SandpackProviderProps
  | Record<string, never> => {
  if (boilerplateCategory === CODE_EDITOR_BOILERPLATE_CATEGORIES.COURSE) {
    const { courseName, moduleName } = getCourseAndModuleFromBoilerplate({
      boilerplate,
    });

    return courseBoilerplates[courseName][moduleName];
  }

  return {};
};
