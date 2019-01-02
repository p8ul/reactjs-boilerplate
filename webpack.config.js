const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]
      },      
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              bypassOnDebug: true,               
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./public/index.html"})
  ]
};
