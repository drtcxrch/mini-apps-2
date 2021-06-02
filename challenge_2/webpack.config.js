const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}