import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'sadanduseless.b-cdn.net',
       'i.kym-cdn.com',
    ],
  },
};

export default nextConfig;
