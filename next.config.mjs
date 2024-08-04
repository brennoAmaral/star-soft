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
    domains: ['softstar.s3.amazonaws.com'],
  },
  output: "standalone",
};

export default nextConfig;
