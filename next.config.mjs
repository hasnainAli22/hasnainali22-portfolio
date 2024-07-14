/** @type {import('next').NextConfig} */
// const path = require("path");
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  reactStrictMode: true,
  output: isDev ? "standalone" : "export",
  basePath: isDev ? "" : "/hasnainali22-portfolio",
  assetPrefix: isDev ? "" : "/hasnainali22-portfolio/",
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
    ],
  },
  publicRuntimeConfig: {
    basePath: isDev ? "" : "/hasnainali22-portfolio",
  },
};
export default nextConfig;
// console.log("Base Path:", nextConfig.basePath);
// module.exports = nextConfig;
