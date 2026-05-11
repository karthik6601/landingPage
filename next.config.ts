const repoName = 'landingPage'

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig