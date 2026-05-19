/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        // Vazquez Millan existing CDN images
        protocol: "https",
        hostname: "lirp.cdn-website.com",
      },
    ],
  },
};

module.exports = nextConfig;
