/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photos.fife.usercontent.google.com',
        port: '',
        pathname: '/pw/**',
      },
    ],
  }
};

export default nextConfig;
