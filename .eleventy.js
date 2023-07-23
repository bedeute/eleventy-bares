module.exports = function (eleventyConfig) {

  eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
  eleventyConfig.addPassthroughCopy("./src/assets/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addPlugin(require('eleventy-plugin-heroicons'), {
    className: 'heroicon',
    errorOnMissing: true
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};