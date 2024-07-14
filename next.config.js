/** @type {import('next').NextConfig} */
const path = require("path");
// const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: '/hasnainali22-portfolio', // Replace with your GitHub repository name
  assetPrefix: '/hasnainali22-portfolio/',
  // output: "export",
  swcMinify: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.githubusercontent.com" },
      { protocol: "https", hostname: "**.github.com" },
    ],
  },
};
module.exports = nextConfig;
// module.exports = withSentryConfig(nextConfig, {
//   org: "nixlab-technologies",
//   project: "portfolio-nextjs",
//   authToken: process.env.SENTRY_AUTH_TOKEN,
//   silent: false,
// });
