import slugify from 'slugify';

// FIX: page type
export const getCoursePageNavigationTree = ({ page, pageTree }: any) => {
  const folderName = page.file.dirname || '';

  if (!folderName) {
    return null;
  }

  const navigationTree = pageTree.children.find(
    (item: any) =>
      item.type === 'folder' &&
      typeof item.name === 'string' &&
      slugify(item.name.toLowerCase()) === folderName,
  );

  return navigationTree;
};

export const getCoursePageGroupSeparatorName = ({
  coursePageNavigationtree,
  pageTitle,
}: any) => {
  let separatorName = '';

  if (
    coursePageNavigationtree &&
    coursePageNavigationtree.children?.length > 0
  ) {
    for (const item of coursePageNavigationtree.children) {
      if (item.type === 'separator') {
        separatorName = item.name;
      }
      // Break loop when page title is found
      if (item.type === 'page' && item.name === pageTitle) {
        break;
      }
    }
  }
  return separatorName;
};
