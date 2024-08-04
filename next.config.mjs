/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonws.com',
        pathname: '/items/'
      },
      
    ],
    formats: [
      'image/avif',
      'image/webp'
    ],
    domains: [
      'firebasestorage.googleapis.com',
      'softstar.s3.amazonaws.com'
    ]
  },
  output: "standalone",
};

export default nextConfig;
