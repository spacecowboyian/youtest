/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/youtest",
  images: {
    unoptimized: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
