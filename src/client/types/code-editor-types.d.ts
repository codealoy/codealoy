import {
  CODE_EDITOR_BOILERPLATE_CATEGORIES_ARRAY,
  CODE_EDITOR_TEMPLATES_ARRAY,
} from '~/configs/client.configs';

export type CodeEditorTempates = (typeof CODE_EDITOR_TEMPLATES_ARRAY)[number];

export type CodeEditorBoilerplateCategoires =
  (typeof CODE_EDITOR_BOILERPLATE_CATEGORIES_ARRAY)[number];

export type CodeEditorBoilerplates = string;
