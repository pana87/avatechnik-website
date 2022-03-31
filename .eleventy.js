module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/fonts")
  eleventyConfig.addPassthroughCopy("./src/img")
  eleventyConfig.addPassthroughCopy("./src/css")

  eleventyConfig.addTransform("replace-url", (content) => {
    const url = process.env.URL || "http://localhost:8080"
    const result = content.replace(/https:\/\/avatechnik.de/g, url)
    return result
  })

  eleventyConfig.addTransform("replace-css-paths", (content) => {
    const result = content.replace(/css\//g, "../css/")
    return result
  })

  eleventyConfig.addTransform("replace-img-paths", (content) => {
    const result = content.replace(/img\//g, "../img/")
    return result
  })

  return {
    dir: {
      input: "./src",
      output: "./public",
    }
  }
}
