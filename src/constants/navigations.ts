export interface NavigationItem {
  title: string;
  href?: string;
  links?: Array<{ title: string; href: string }>;
}

interface NavigationList {
  HOME: Array<NavigationItem>;
  GUIDES: Array<NavigationItem>;
}

export const NAVIGATION_LIST: NavigationList = {
  HOME: [],
  GUIDES: [
    {
      title: 'Introduction',
      links: [
        { title: 'Getting started', href: '/docs' },
        { title: 'Installation', href: '/docs/installation' },
      ],
    },
    {
      title: 'Core concepts',
      links: [
        { title: 'Understanding caching', href: '/docs/understanding-caching' },
        {
          title: 'Predicting user behavior',
          href: '/docs/predicting-user-behavior',
        },
        { title: 'Basics of time-travel', href: '/docs/basics-of-time-travel' },
        {
          title: 'Introduction to string theory',
          href: '/docs/introduction-to-string-theory',
        },
        { title: 'The buttery effect', href: '/docs/the-butterfly-effect' },
      ],
    },
    {
      title: 'Advanced guides',
      links: [
        { title: 'Writing plugins', href: '/docs/writing-plugins' },
        { title: 'Neuralink integration', href: '/docs/neuralink-integration' },
        { title: 'Temporal paradoxes', href: '/docs/temporal-paradoxes' },
        { title: 'Testing', href: '/docs/testing' },
        { title: 'Compile-time caching', href: '/docs/compile-time-caching' },
        {
          title: 'Predictive data generation',
          href: '/docs/predictive-data-generation',
        },
      ],
    },
    {
      title: 'API reference',
      links: [
        { title: 'CacheAdvance.predict()', href: '/docs/cacheadvance-predict' },
        { title: 'CacheAdvance.flush()', href: '/docs/cacheadvance-flush' },
        { title: 'CacheAdvance.revert()', href: '/docs/cacheadvance-revert' },
        { title: 'CacheAdvance.regret()', href: '/docs/cacheadvance-regret' },
      ],
    },
    {
      title: 'Contributing',
      links: [
        { title: 'How to contribute', href: '/docs/how-to-contribute' },
        { title: 'Architecture guide', href: '/docs/architecture-guide' },
        { title: 'Design principles', href: '/docs/design-principles' },
      ],
    },
  ],
};
