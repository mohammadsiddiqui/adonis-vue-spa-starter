// vue.config.js
module.exports = {
  outputDir: "public",
  pages: {
    index: {
      entry: "src/main.js",
      template: "publicsrc/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  }
};
