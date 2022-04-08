/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';

const { ON_GITHUB_PAGES } = process.env;

const basePath = '/github-pages-demo2';
const assetPrefix = '/github-pages-demo2/';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  env: {
    baseUrl,
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  basePath,
  assetPrefix,
});
