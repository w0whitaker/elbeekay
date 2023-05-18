/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("imageUrl", function (url) {
    const arr = url.split("/");
    const filename = arr.pop();
    return `/images/${filename}`;
  });

  eleventyConfig.addPlugin(EleventyVitePlugin, {});

  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  return {
    dir: {
      data: "_data",
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    passthroughFileCopy: true,
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
  };
};
