import { MarkdocNextJsPageProps } from "@markdoc/next.js";
import { slugifyWithCounter } from "@sindresorhus/slugify";

const getNodeText = (node) => {
  let text = "";
  for (const child of node.children ?? []) {
    if (typeof child === "string") {
      text += child;
    }
    text += getNodeText(child);
  }
  return text;
};

const collectHeadings = (nodes: any, slugify = slugifyWithCounter()) => {
  const sections: any = [];

  if (nodes.length) {
    for (const node of nodes) {
      if (/^h[23]$/.test(node.name)) {
        const title = getNodeText(node);
        if (title) {
          const id = slugify(title);
          node.attributes.id = id;
          if (node.name === "h3") {
            sections[sections.length - 1].children.push({
              ...node.attributes,
              title,
            });
          } else {
            sections.push({ ...node.attributes, title, children: [] });
          }
        }
      }

      sections.push(...collectHeadings(node.children ?? [], slugify));
    }
  }
  return sections;
};

export const getTableOfContent = ({ markdoc }: MarkdocNextJsPageProps) => {
  let tableOfContents = [];

  if (markdoc) {
    const markdocContent = markdoc.content;
    const isMarkdocContentObject =
      typeof markdoc.content === "object" && !Array.isArray(markdocContent);

    tableOfContents = collectHeadings(
      isMarkdocContentObject
        ? [markdocContent]
        : [...(markdocContent as Array<any>)]
    );
  }

  return tableOfContents;
};
