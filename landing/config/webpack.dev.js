const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'landing',
      filename: 'remoteEntry.js',
      exposes: {
        './app': './src/bootstrap.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}

module.exports = merge(commonConfig, devConfig);