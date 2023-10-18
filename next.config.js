/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // images: {
  //   loader: 'custom',
  //   loaderFile: './my-loader.ts',
  // },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
        
      }
}

module.exports = nextConfig

