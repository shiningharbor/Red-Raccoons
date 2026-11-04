import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/ddcclrs92/image/upload/**" },
    ],
  },
};

export default nextConfig;
