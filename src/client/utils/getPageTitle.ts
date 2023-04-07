import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { SITE_TITLE } from '~/client/constants/site-settings';

export const getPageTitle = ({ markdoc }: MarkdocNextJsPageProps) => {
  if (markdoc) {
    return `${
      markdoc.frontmatter.pageTitle || markdoc.frontmatter.title
    } - Codealoy`;
  } else {
    return SITE_TITLE;
  }
};