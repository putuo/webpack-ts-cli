// 增加代码智能提示
const { Configuration } = require("webpack");

const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index");

/**
 * @type { Configuration } // 使用注解的方式，增加代码智能提示
 */
const config = {
  mode: "development",

  // 入口文件
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/, // 解析 .vue 结尾的文件
        use: "vue-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      // 指定 html 模板位置
      template: "./public/index.html",
    }),
    new VueLoaderPlugin(),
  ],
};

module.exports = config;