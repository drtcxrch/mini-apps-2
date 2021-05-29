const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
};
// const path = require('path');
// const autoprefixer = require('autoprefixer');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { SourceMapDevToolPlugin } = require("webpack");

// module.exports = {
//   entry: './index.js',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js'
//   },
//   resolve: {
//     extensions: ['.js', '.jsx']
//   },
//   target: 'web',
//   mode: 'development',
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         enforce: 'pre',
//         use: ['source-map-loader'],
//       },
//       {
//         test: /\.(js|jsx)$/,
//         use: ['babel-loader'],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//         use: ['postcss-loader'],
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/,
//         use: ['url-loader?limit=10000&name=img/[name].[ext]']
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: __dirname + '/public/index.html',
//       filename: 'index.html',
//       inject: 'body'
//     }),
//     new SourceMapDevToolPlugin({
//       filename: "[file].map"
//     })
//   ]
// };