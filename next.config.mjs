/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API: process.env.API,
  },
  images: {
    domains: ['softstar.s3.amazonaws.com'], // Adicione o domínio permitido aqui
  }
};

export default nextConfig;
