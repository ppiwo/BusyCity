const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader?url=false', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|kml|kmz|svg)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.resolve(__dirname, 'src', './templates/helpers')
        }
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new CopyPlugin({
      patterns: [{ from: './src/assets', to: './assets' }]
    })
  ],
  output: {
    clean: true
  }
};
