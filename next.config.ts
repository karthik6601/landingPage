/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  basePath: '/landingPage',
  assetPrefix: '/landingPage/',

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;