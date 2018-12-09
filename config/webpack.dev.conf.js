const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.base.conf');

const TITLE = 'DEV - ';

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /(\.css|\.scss)$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader', // postprocesses CSS
            options: {
              sourceMap: true,
              ident: 'scss'
            }
          },
          {
            // resolves relative paths based on the original source file.
            loader: 'resolve-url-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'favicon.ico', // or use favicons-webpack-plugin
      title: TITLE
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ] 
});
