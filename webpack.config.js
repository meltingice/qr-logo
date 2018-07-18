const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "qr-logo.js",
    library: "QRLogo",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}