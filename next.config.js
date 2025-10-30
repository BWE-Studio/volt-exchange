/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    LOWEST_PRICE: process.env.LOWEST_PRICE,
    HIGHEST_PRICE: process.env.HIGHEST_PRICE,
  },
};

module.exports = nextConfig;