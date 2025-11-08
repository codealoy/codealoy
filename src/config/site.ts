// Site Configs
export const BASE_URL = 'https://www.codealoy.com';

export const SITE_TITLE =
  'Codealoy - Web Development Learning Platform in Bangla';

export const SITE_DESCRIPTION =
  'Learn web development in Bangla with Codealoy. Access tutorials and courses on HTML, CSS, JavaScript, React, and more. Start your journey with Codealoy today!';

export const SITE_NAME = 'কোডালয় | Codealoy';

export const SITE_NAME_LOWERCASE = 'codealoy';

export const OG_SITE_NAME = 'কোডালয় | Codealoy';
export const OG_IMAGE = `${BASE_URL}/images/og/codealoy-social-card-01910487-74c6-7402-b0d4-4c5515269f79.jpg`;
export const OG_IMAGE_ALT = SITE_TITLE;
export const OG_IMAGE_WIDTH = '1200';
export const OG_IMAGE_HEIGHT = '630';

export const TWITTER_USER_NAME = 'codealoy';

export const SITE_COLORS = {
  PRIMARY: '#22E087',
};

export const SUPPORT_EMAIL = 'mailto:support@codealoy.com';

// Theme Configs
export const DEFAULT_THEME = 'dark';

// Related Links
export const GITHUB_REPO_LINK = 'https://github.com/codealoy/codealoy';
export const GITHUB_CONTRIBUTORS_API_LINK =
  'https://api.github.com/repos/codealoy/codealoy/contributors';

export const FORUM_LINK = 'https://github.com/codealoy/codealoy/discussions';

export const FACEBOOK_PAGE_LINK = 'https://www.facebook.com/codealoy';
export const FACEBOOK_GROUP_LINK = 'https://www.facebook.com/groups/codealoy';

export const TWITTER_PAGE_LINK = 'https://twitter.com/codealoy';

// Time-related Configs
export const ONE_DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24; // 24 hours

// Code Editor Configs
export const CODE_EDITOR_TEMPLATES_ARRAY = ['test-runner-js', 'react'] as const;

export const CODE_EDITOR_TEMPLATES = {
  TEST_RUNNER_JS: 'test-runner-js',
  REACT: 'react',
};

export const CODE_EDITOR_BOILERPLATE_CATEGORIES_ARRAY = [
  'course',
  'blog',
] as const;

export const CODE_EDITOR_BOILERPLATE_CATEGORIES = {
  COURSE: 'course',
  BLOG: 'blog',
};

// Schema Markup Data
export const EDUCATIONAL_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_NAME,
  alternateName: 'কোডালয়',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
  image: OG_IMAGE,
  sameAs: [
    `https://www.facebook.com/${TWITTER_USER_NAME}`,
    `https://twitter.com/${TWITTER_USER_NAME}`,
    'https://github.com/codealoy/codealoy',
  ],
  address: {
    '@type': 'Location',
    addressRegion: 'Dhaka',
    addressCountry: 'Bangladesh',
  },
  inLanguage: 'bn',
  educationalCredentialAwarded: 'Certificate',
  teaches: [
    'Web Development',
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Programming',
    'Software Engineering',
    'Problem Solving',
    'Career Guidance',
    'Interview Preparation',
  ],
};

export const WEB_SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Codealoy',
  url: BASE_URL,
  description: SITE_DESCRIPTION,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/favicon.svg`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'bn',
};

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: 'Codealoy',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
  sameAs: [
    `https://www.facebook.com/${TWITTER_USER_NAME}`,
    `https://twitter.com/${TWITTER_USER_NAME}`,
    'https://github.com/codealoy/codealoy',
  ],
};
