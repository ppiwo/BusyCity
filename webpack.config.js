const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    watch: true,
    module: {
      rules: [
        {
          test: /\.(scss|css)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /\.(png|jpe?g|gif|kml|kmz)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
          options: {
              helperDirs: path.resolve(__dirname, "src", "./templates/helpers")
          }
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env':{ 'API_KEY': 'test999'} }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
      })
    ]
  };