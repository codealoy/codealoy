import { atom } from 'jotai';

export interface CoursePageNavigationTree {
  type: 'folder';
  name: string;
  children?: CoursePageNavigationTreeItem[];
}

export interface CoursePageNavigationTreeItem {
  type: 'page' | 'folder' | 'separator';
  name: string;
  url: string;
  external?: boolean;
}

export const coursePageNavigationAtom = atom<CoursePageNavigationTree | null>(
  null,
);
coursePageNavigationAtom.debugLabel = 'coursePageNavigationAtom';
