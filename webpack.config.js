module.exports = {
    // ...
    entry: ["./src/index.ts"],
    output: {
      //filename: "bundle.js",
      //path: path.resolve(__dirname, "dist"),
      library: "BOBO",
      //libraryTarget: "window",
      libraryTarget: "umd",   
      // 使用umd 即使未配置 window ,也能全局访问，且访问的方式是 window.greet, 
      // 配上 library 也不错，相当于多了一个命名空间
    },
    target: ["web", "es5"],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
          // use 从下往上执行的
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      useBuiltIns: "usage",
                      corejs: 3,
                    },
                  ],
                ],
              },
            },
            "ts-loader",
          ],
  
          exclude: /node_modules/,
        },
      ],
    },
  };