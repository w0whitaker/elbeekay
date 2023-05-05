/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
