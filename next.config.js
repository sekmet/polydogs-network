/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  swcMinify: true,
  env: {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    API_URL: process.env.API_URL || 'http://localhost:3000',
    INFURA_API_KEY: process.env.INFURA_API_KEY || '',
    VIGIL_API_KEY: process.env.VIGIL_API_KEY || '',
    MUMBAI_RPC_URL: process.env.MUMBAI_RPC_URL || '',
    PK: process.env.PK || '',
    PROFILE_ID: process.env.PROFILE_ID || '',
    LENS_API: process.env.LENS_API || '',
    LENS_HUB_CONTRACT: process.env.LENS_HUB_CONTRACT || '',
    MUMBAI_PRIVATE_KEY: process.env.MUMBAI_PRIVATE_KEY || '',
  },
});
