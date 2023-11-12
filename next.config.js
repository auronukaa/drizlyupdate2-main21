/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapiadmin.drizlymall.com",
      },
    ],
  },
};

module.exports = nextConfig;
