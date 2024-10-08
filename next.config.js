/** @type {import("next").NextConfig} */
const config = {
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts",
    remotePatterns: [
      {
        hostname: "www.vcroles.com",
      },
      {
        hostname: "i.scdn.co",
      },
    ],
  },
};

export default config;
