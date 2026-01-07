/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed "output: export" to enable API routes for email functionality
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


