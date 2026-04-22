import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
      turbopackFileSystemCacheForDev: true,
  }
  module.exports = {
    output: 'standalone',
  }
};


export default nextConfig;
