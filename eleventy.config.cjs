/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyVitePlugin);

  eleventyConfig.addWatchTarget("./src/assets/**/*");
  eleventyConfig.addPassthroughCopy({
    "./src/assets/css/main.css": "/assets/css/main.css",
  });
  eleventyConfig.addPassthroughCopy({
    "./src/assets/scripts/main.ts": "/assets/scripts/main.ts",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
