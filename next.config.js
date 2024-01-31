/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    unoptomized: true,
    domains: [
      'images.unsplash.com',
    ]
  }
}
