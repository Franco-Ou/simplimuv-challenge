/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['royalenfieldvicentelopez.com', 'harley-davidson.com.ar']
  }
};

module.exports = nextConfig;
