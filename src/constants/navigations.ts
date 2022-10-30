export interface NavigationLink {
  title: string;
  href?: string;
}

export interface NavigationItem extends NavigationLink {
  links?: Array<NavigationLink>;
}

interface NavigationList {
  HOME: Array<NavigationItem>;
}

export const NAVIGATION_LIST: NavigationList = {
  HOME: [
    {
      title: 'Home',
      href: '/',
    },
  ],
};
