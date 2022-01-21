const { environment } = require('@rails/webpacker')

module.exports = environment

environment.loaders.append("html", {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
        options: {
          minimize: true,
        },
      },
    ],
  });