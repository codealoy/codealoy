import React from 'react';

export const useTableOfContents = (tableOfContents) => {
  const [currentSection, setCurrentSection] = React.useState(
    tableOfContents[0]?.id,
  );

  const getHeadings = React.useCallback(() => {
    function* traverse(node) {
      if (Array.isArray(node)) {
        for (const child of node) {
          yield* traverse(child);
        }
      } else {
        const el = document.getElementById(node.id);
        if (!el) return;

        const style = window.getComputedStyle(el);
        const scrollMt = parseFloat(style.scrollMarginTop);

        const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
        yield { id: node.id, top };

        for (const child of node.children ?? []) {
          yield* traverse(child);
        }
      }
    }

    return Array.from(traverse(tableOfContents));
  }, [tableOfContents]);

  React.useEffect(() => {
    const headings = getHeadings();
    if (tableOfContents.length === 0 || headings.length === 0) return;
    function onScroll() {
      const sortedHeadings: any = headings
        .concat([])
        .sort((a: any, b: any) => a.top - b.top);

      const top = window.scrollY;

      let current = sortedHeadings[0].id;

      for (const element of sortedHeadings) {
        if (top >= element.top) {
          current = element.id;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener('scroll', onScroll, {
      capture: true,
      passive: true,
    });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll, {
        capture: true,
      });
    };
  }, [getHeadings, tableOfContents]);

  return currentSection;
};
