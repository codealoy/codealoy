import { env } from '@/config/env';
import type { Viewport } from 'next';
import { Metadata } from 'next';

// Site Configs
export const BASE_URL =
  env.NEXT_PUBLIC_RUNTIME_ENV === 'production'
    ? 'https://www.codealoy.com'
    : 'https://codealoy.local';

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
export const GITHUB_CONTRIBUTOS_API_LINK =
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

export const SITE_METADATA_GLOBAL: Metadata = {
  title: {
    template: '%s - Codealoy',
    default: SITE_TITLE,
  },
  description: SITE_DESCRIPTION,
  icons: {
    apple: `${BASE_URL}/favicon/apple-touch-icon.png?v=2`,
    icon: [
      {
        url: `${BASE_URL}/favicon/favicon-32x32.png?v=2`,
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/favicon/favicon-16x16.png?v=2`,
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    shortcut: `${BASE_URL}/favicon/favicon.ico?v=2`,
  },
  manifest: `${BASE_URL}/favicon/site.webmanifest?v=2`,
  openGraph: {
    title: SITE_TITLE,
    siteName: OG_SITE_NAME,
    url: BASE_URL,
    description: SITE_DESCRIPTION,
    locale: 'bn_BD',
    images: [
      {
        url: OG_IMAGE,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
      },
    ],
    type: 'website',
  },
  twitter: {
    title: SITE_TITLE,
    creator: TWITTER_USER_NAME,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const SITE_VIEWPORT_GLOBAL: Viewport = {
  themeColor: SITE_COLORS.PRIMARY,
  colorScheme: 'dark light',
};
