const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    rules: 
    [
    {
     test: /\.(png|jpg)$/,
     loader: 'file-loader',
     options: {
        name: '[name].[ext]',
        outputPath: './statics'
      }
     },
     {
      test: /\.(ico)$/,
      loader: 'file-loader',
      options: {
         name: '[name].[ext]',
       }
      },
     {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
     },
     {
      test: /\.scss$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
     },
     {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "app")
      ],
      exclude: [
       path.resolve(__dirname, "node_modules"),
       path.resolve(__dirname, "__tests__")
      ],
      loader: 'babel-loader'
     }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    })
  ]
};