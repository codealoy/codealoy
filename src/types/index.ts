import type { PageTree } from 'fumadocs-core/server';

import { getPage } from '@/lib/mdx';

// Course page types
export type CoursePage = ReturnType<typeof getPage>;

// Course page navigation types
export type CoursePageNavigationTreeRoot = PageTree.Root;

export type CoursePageNavigationTreeNode = PageTree.Node;

export type CoursePageNavigationTreeFolder = PageTree.Folder;

export type CoursePageNavigationTreeItem = PageTree.Item;

export type CoursePageNavigationTreeSeparator = PageTree.Separator;
