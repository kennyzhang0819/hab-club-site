import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      'calhacks-sierra.s3.us-west-2.amazonaws.com', 
      'calhacks-sierra.s3-us-west-2.amazonaws.com',
      'iili.io'],
  },
};

export default nextConfig;
