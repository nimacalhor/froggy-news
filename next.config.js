/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["api.unsplash.com", "images.unsplash.com"],
  },
}

module.exports = nextConfig