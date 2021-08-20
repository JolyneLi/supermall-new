const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  devServer: {
    host: "0.0.0.0",
  },

  chainWebpack: (config) => {
    // 设置快捷路径， @ 表示 'src' ，components 表示 'src/components'
    config.resolve.alias
      .set("@", resolve("src"))
      .set("components", resolve("src/components"))
      .set("network", resolve("src/network"))
      .set("assets", resolve("src/assets"))
      .set("views", resolve("src/views"));
  },
};
