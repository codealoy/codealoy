import { SandpackProviderProps } from '@codesandbox/sandpack-react';

import { courseBoilerplates } from '~/client/boilerplates/courses';
import {
  CodeEditorBoilerplateCategoires,
  CodeEditorBoilerplates,
} from '~/client/types/code-editor-types';
import { getCourseAndModuleFromBoilerplate } from '~/client/utils/getCourseAndModuleFromBoilerplate';
import { CODE_EDITOR_BOILERPLATE_CATEGORIES } from '~/configs/client.configs';

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
