/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/youtest", // Commented out for standalone deployment
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
