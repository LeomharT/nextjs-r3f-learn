import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  transpilePackages: ['three'],
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
      '*.glsl': {
        loaders: ['raw-loader'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
