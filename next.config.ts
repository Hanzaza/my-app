import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Turbopack uses this folder as the workspace root
  turbopack: {
    root: path.resolve('./'),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
