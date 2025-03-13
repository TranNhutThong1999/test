import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['ts', 'tsx'],
  images: {
    domains: ["s3-alpha-sig.figma.com"],
  },
};

export default nextConfig;
