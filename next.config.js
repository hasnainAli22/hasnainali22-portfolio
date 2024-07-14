/** @type {import('next').NextConfig} */
const path = require("path");
// const { withSentryConfig } = require("@sentry/nextjs");
const isDev = true ? process.env.NODE_ENV === 'development' : false;
const nextConfig = {
  reactStrictMode: true,
  output: isDev ? "standalone" : "export",
  basePath: isDev ? "" : "/hasnainali22-portfolio",
  assetPrefix: isDev ? "" : '/hasnainali22-portfolio/',
  // basePath: '/hasnainali22-portfolio', // Replace with your GitHub repository name
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
