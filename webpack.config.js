const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html"
    })
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: [/\.scss$/, /\.css$/],
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  output: {
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  }
};
