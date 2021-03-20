const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
    mode: "development",
    watch: true,
    module: {
      rules: [
        {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|kml)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin({ 'process.env':{ 'API_KEY': 'test999'} })],
  };