// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: "export",
  basePath: "/jola",
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
