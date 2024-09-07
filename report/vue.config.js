const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
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
});
