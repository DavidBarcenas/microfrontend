const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common.js');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        'landing': 'landing@http://localhost:8081/remoteEntry.js',
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ]
}

module.exports = merge(commonConfig, devConfig);