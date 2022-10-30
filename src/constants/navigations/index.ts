import {
  LEARN_PROBLEM_SOLVING_BASIC_BASE_URL,
  LEARN_PROBLEM_SOLVING_BASIC_NAV_ITEMS,
} from './courses/learn-problem-solving-basic';
import { PRIMARY_NAV_ITEMS } from './primary';

export interface NavigationLink {
  title: string;
  href?: string;
}

export interface NavigationItem extends NavigationLink {
  links?: NavigationLink[];
}

export interface NavigationList {
  PRIMARY: NavigationItem[];
  COURSES: Record<string, NavigationItem[]>;
}

export const NAVIGATION_LIST: NavigationList = {
  PRIMARY: PRIMARY_NAV_ITEMS,
  COURSES: {
    [LEARN_PROBLEM_SOLVING_BASIC_BASE_URL]:
      LEARN_PROBLEM_SOLVING_BASIC_NAV_ITEMS,
  },
};
