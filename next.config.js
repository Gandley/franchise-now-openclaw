/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'news-letter.s3.wasabisys.com',
      },
    ],
  },
}

module.exports = nextConfig
