/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"], // Add the hostname(s) here
  },
}

module.exports = nextConfig
