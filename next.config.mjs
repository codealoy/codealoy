import { fileURLToPath } from 'node:url';
import { withContentCollections } from '@content-collections/next';
import createJiti from 'jiti';

// Import env here to validate during build. Using jiti we can import .ts files :)
const jiti = createJiti(fileURLToPath(import.meta.url));
jiti('./src/config/env.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['jotai-devtools'],
  // Disable eslint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['bn-BD'],
    defaultLocale: 'bn-BD',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.externals.push('@node-rs/argon2', '@node-rs/bcrypt');
    return config;
  },
};

export default withContentCollections(nextConfig);
