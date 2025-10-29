/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Note: `eslint` config in next.config is no longer supported in Next.js 16+
  // Remove eslint.ignoreDuringBuilds to avoid warnings.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  // When deploying to a repository page (username.github.io/repo) set
  // NEXT_PUBLIC_BASE_PATH to `/repo-name` (GitHub Actions below sets this
  // automatically). Defaults to empty string for user/org pages.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
