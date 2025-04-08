const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("src/css/fonts");
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
