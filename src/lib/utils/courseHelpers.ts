import React from 'react';
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

const extractStringLine = (
  obj: {
    props: { children: React.ReactNode | React.ReactNode[] };
  } & React.ReactNode,
): string => {
  let lineString = '';

  if (typeof obj?.props?.children === 'string') {
    return obj.props.children;
  }

  if (obj?.props?.children && typeof obj.props.children === 'object') {
    if (Array.isArray(obj.props.children)) {
      for (let child of obj.props.children) {
        const result = extractStringLine(child as any);
        if (result) lineString += result;
      }
    } else {
      return extractStringLine(obj.props.children);
    }
  }
  return lineString;
};

export const extractCodeTextFromRawObject = (
  rawObject: JSX.IntrinsicElements['code'] & {
    props: { children: React.ReactNode[] };
    type: string;
  },
): string => {
  let codeString = '';

  if (rawObject.type === 'code' && rawObject.props.children.length > 0) {
    rawObject.props.children.forEach((child: React.ReactNode | string) => {
      if (typeof child === 'string') {
        codeString += child;
      } else {
        const string = extractStringLine(child as any);
        if (string) {
          codeString += string;
        }
      }
    });
  }

  return codeString;
};
