const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  publicPath: "/",
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
  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(resolve("src/assets/svg")).end();
    config.module
      .rule("svg-sprite-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg")) // 处理svg目录
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });

    config.resolve.alias.set("vue", "@vue/compat");
    // config.module
    //   .rule("vue")
    //   .use("vue-loader")
    //   .tap((options) => {
    //     return {
    //       ...options,
    //       compilerOptions: {
    //         compatConfig: {
    //           MODE: 3,
    //         },
    //       },
    //     };
    //   });
  },
});
