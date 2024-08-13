import React from 'react';
import slugify from 'slugify';

import { CoursePage, CoursePageNavigationTree } from '@/types';

import { pageTree } from '@/lib/mdx';

interface coursePageSlug {
  courseSlugs: string[];
}

export const getAllCoursePagesSlugs = () => {
  const allCoursePagesSlugs: coursePageSlug[] = [];

  pageTree.children.forEach((rootItem) => {
    if (rootItem.type === 'folder' && rootItem.children.length > 0) {
      rootItem.children.forEach((childItem) => {
        if (childItem.type === 'page' && childItem.url && !childItem.external) {
          allCoursePagesSlugs.push({
            courseSlugs: childItem.url
              .split('/')
              .filter((part: string) => part !== '' && part !== 'courses'),
          });
        }
      });
    }
  });

  return allCoursePagesSlugs;
};

export const getCoursePageNavigationTree = ({ page }: { page: CoursePage }) => {
  if (!page) {
    return null;
  }

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

export const getCoursePageGroupSeparatorName = (props: {
  coursePageNavigationTree: CoursePageNavigationTree;
  pageTitle: string;
}) => {
  const { coursePageNavigationTree, pageTitle } = props;
  let separatorName = '';

  if (
    coursePageNavigationTree &&
    coursePageNavigationTree.children?.length > 0
  ) {
    for (const item of coursePageNavigationTree.children) {
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
  obj: React.ReactNode & {
    props: React.PropsWithChildren;
  },
): string => {
  let lineString = '';

  if (typeof obj?.props?.children === 'string') {
    return obj.props.children;
  }

  if (obj?.props?.children && typeof obj.props.children === 'object') {
    if (Array.isArray(obj.props.children)) {
      for (const child of obj.props.children) {
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
  rawObject: React.ReactNode & {
    props: React.PropsWithChildren;
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
