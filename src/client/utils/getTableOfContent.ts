import { MarkdocNextJsPageProps } from '@markdoc/next.js';
import { slug } from 'github-slugger';

const getNodeText = (node) => {
  let text = '';
  for (const child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
};

// eslint-disable-next-line sonarjs/cognitive-complexity
const collectHeadings = (nodes: any, slug) => {
  const sections: any = [];

  if (nodes.length) {
    for (const node of nodes) {
      if (/^h[23]$/.test(node.name)) {
        const title = getNodeText(node);
        if (title) {
          const id = slug(title);
          node.attributes.id = id;
          if (node.name === 'h3') {
            sections[sections.length - 1].children.push({
              ...node.attributes,
              title,
            });
          } else {
            sections.push({ ...node.attributes, title, children: [] });
          }
        }
      }

      sections.push(...collectHeadings(node.children ?? [], slug));
    }
  }
  return sections;
};

export const getTableOfContent = ({ markdoc }: MarkdocNextJsPageProps) => {
  let tableOfContents = [];

  if (markdoc) {
    const markdocContent = markdoc.content;
    const isMarkdocContentObject =
      typeof markdoc.content === 'object' && !Array.isArray(markdocContent);

    tableOfContents = collectHeadings(
      isMarkdocContentObject
        ? [markdocContent]
        : [...(markdocContent as Array<any>)],
      slug,
    );
  }

  return tableOfContents;
};
