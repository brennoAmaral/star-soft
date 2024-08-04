/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      
    ],
    // domains: ['www.softstar.s3.amazonaws.com'],
  },
  output: "standalone",
};

export default nextConfig;
