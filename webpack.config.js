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
  };