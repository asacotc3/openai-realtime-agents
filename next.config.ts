import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignora los errores de ESLint en tiempo de build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
