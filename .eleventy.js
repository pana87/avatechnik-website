module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./static/fonts")
  eleventyConfig.addPassthroughCopy("./static/img")
  eleventyConfig.addPassthroughCopy("./static/css")

  eleventyConfig.addPassthroughCopy({"./src/js": "./js"})
  eleventyConfig.addPassthroughCopy({"./assets": "./img"})

  eleventyConfig.addPassthroughCopy({
    "node_modules/@getyour/getyour-modal/close.svg": "./img/close.svg"
  })

  eleventyConfig.addPassthroughCopy({
    "node_modules/@getyour/getyour-modal/getyour-modal.js": "js/getyour-modal.js"
  })

  eleventyConfig.addPassthroughCopy({
    "node_modules/@getyour/getyour-picture-slider/getyour-picture-slider.js": "js/getyour-picture-slider.js"
  })

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

  eleventyConfig.addTransform("add-app-script", (content, outputPath) => {
    const scriptTag =
`
    <script type="module" src="./js/app.js"></script>
  </body>
`

    if (outputPath === "./public/index.html") {
      return content.replace(/<\/body>/, scriptTag)
    }
    return content
  })

  return {
    dir: {
      input: "./static",
      output: "./public",
    }
  }
}
