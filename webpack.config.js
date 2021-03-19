const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
    mode: "development",
    module: {
      rules: [
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin({ 'process.env':{ 'API_KEY': 'REPLACE_API_KEY'} })],
  };