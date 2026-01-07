/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Hostinger / static hosting (this disables Next.js API routes)
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


