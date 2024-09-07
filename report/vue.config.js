const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
module.exports = defineConfig({
  publicPath: "/report",
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // client: {
    //   overlay: false
    // },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    proxy: {
      "/api": {
        target: "http://192.168.3.168/xz_platform",
        changeOrigin: true,
      },
      "/upm-api": {
        target: "http://192.168.3.168",
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`, // webpack 5 需要把 jsonpFunction 替换成 chunkLoadingGlobal
    },
  },
});
