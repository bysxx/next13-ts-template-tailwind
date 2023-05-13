/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  experimental: {
    appDir: true,
    serverActions: true,
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
