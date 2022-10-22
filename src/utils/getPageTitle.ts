import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { SITE_TITLE } from '../constants/site-settings';

export const getPageTitle = ({ markdoc }: MarkdocNextJsPageProps) => {
  if (markdoc) {
    return (
      markdoc.frontmatter.pageTitle || `${markdoc.frontmatter.title} - Docs`
    );
  } else {
    return SITE_TITLE;
  }
};
