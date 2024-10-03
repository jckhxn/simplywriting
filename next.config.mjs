/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "via.placeholder.com" },
    ],
  },
};

export default nextConfig;
