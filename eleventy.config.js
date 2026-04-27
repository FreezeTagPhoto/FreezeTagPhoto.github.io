// @ts-check

import handlebarsPlugin from "@11ty/eleventy-plugin-handlebars";
import eleventyPluginFilesMinifier from "@codestitchofficial/eleventy-plugin-minify"

/**
 * @param {import("@11ty/eleventy/UserConfig").default} eleventyConfig
 * @returns {Promise<any>}
 */
export default async function(eleventyConfig) {
    eleventyConfig.addPlugin(handlebarsPlugin)
    eleventyConfig.addPlugin(eleventyPluginFilesMinifier)

    eleventyConfig.setOutputDirectory("dist")
    eleventyConfig.setInputDirectory("site")
    eleventyConfig.setIncludesDirectory("_includes")
    eleventyConfig.addPassthroughCopy("site/assets")
    eleventyConfig.addPassthroughCopy("site/theme.js")
    eleventyConfig.addPassthroughCopy("site/*.css")

    eleventyConfig.addCollection("navbar", async (/** @type {any} */ collectionApi) => {
        return collectionApi.getAllSorted().sort((/** @type {any} */ a, /** @type {any} */ b) => {
            return (a.data.navOrder || 0) - (b.data.navOrder || 0)
        })
    })

    return {
        htmlTemplateEngine: "hbs"
    }
}