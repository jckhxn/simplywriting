/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,

    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "via.placeholder.com" },
    ],
  },
};

export default nextConfig;
