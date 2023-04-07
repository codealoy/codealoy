import { MarkdocNextJsPageProps } from '@markdoc/next.js';

import { SITE_TITLE } from '~/configs/client.configs';

export const getPageTitle = ({ markdoc }: MarkdocNextJsPageProps) => {
  if (markdoc) {
    return `${
      markdoc.frontmatter.pageTitle || markdoc.frontmatter.title
    } - Codealoy`;
  } else {
    return SITE_TITLE;
  }
};
