/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.msisurfaces.com'],
  },
  target: 'serverless',
};

module.exports = nextConfig;
