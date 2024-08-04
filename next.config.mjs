/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'softstar.s3.amazonaws.com',
        port: '',
        pathname: '/items/**',
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
