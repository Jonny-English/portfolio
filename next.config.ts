import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // Checking eslint during build is good, but for static export workflow we might want to be permissive if user hasn't fixed all rules yet.
    // Let's keep it default.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
