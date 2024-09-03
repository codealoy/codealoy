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
}

export const NAVIGATION_LIST: NavigationList = {
  PRIMARY: PRIMARY_NAV_ITEMS,
};
