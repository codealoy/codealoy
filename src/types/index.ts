// Course page navigation types
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
