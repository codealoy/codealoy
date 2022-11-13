import { SandpackProviderProps } from '@codesandbox/sandpack-react';
import merge from 'lodash/merge';

import { defaultBoilerplates } from '../boilerplates/defaults';

import { CodeEditorTempates } from '../types/code-editor-types';
import {
  getCustomBoilerplate,
  GetCustomBoilerplateParams,
} from './getCustomBoilerplate';

interface GetBoilerplateParams extends GetCustomBoilerplateParams {
  template: CodeEditorTempates;
}

export const getBoilerpate = ({
  template,
  boilerplate,
  boilerplateCategory,
}: GetBoilerplateParams): SandpackProviderProps => {
  const defaultBoilerplate: SandpackProviderProps =
    defaultBoilerplates[template];

  if (!defaultBoilerplate) {
    throw new Error(`Boilerplate not found for ${template} template.`);
  }

  const customBoilerplate = getCustomBoilerplate({
    boilerplate,
    boilerplateCategory,
  });

  return merge(defaultBoilerplate, customBoilerplate);
};
