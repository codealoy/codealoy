import {
  NavigationList,
  NAVIGATION_LIST,
  NavigationItem,
} from '../constants/navigations';

interface GetNavigationItemsParms {
  scope: keyof NavigationList;
  routePath?: string;
}

export const getNavigationItems = ({
  scope,
  routePath,
}: GetNavigationItemsParms) => {
  let baseUrl: string | undefined;

  if (routePath && scope === 'COURSES') {
    baseUrl = routePath.split('/').slice(0, 3).join('/');
  }

  return (
    baseUrl ? NAVIGATION_LIST[scope][baseUrl] : NAVIGATION_LIST[scope]
  ) as NavigationItem[];
};
