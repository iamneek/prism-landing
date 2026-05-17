/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "fonts.googleapis.com"
      },
      {
        protocol: "https",
        hostname: "fonts.gstatic.com"
      },
      {
        protocol: "https",
        hostname: "picsum.photos"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  }
};

module.exports = nextConfig;
