/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mosaic.scdn.co", "i.scdn.co", "cdn.pixabay.com"],
    formats: ["image/webp"],
  },
}

module.exports = nextConfig
