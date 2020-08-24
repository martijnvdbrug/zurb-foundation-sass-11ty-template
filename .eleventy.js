module.exports = eleventyConfig => {
    // Copy our static assets to the output folder
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('images');

    // Returning something from the configuration function is optional
    return {
        dir: {
            output: "_site"
        },
        markdownTemplateEngine: "njk"
    };
};
