const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.single-spa.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'products.js',
    libraryTarget: 'system'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: [
          /src/,
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    },
    port: 5003
  },

};
