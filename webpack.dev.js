const merge = require('webpack-merge');
/* eslint-disable import/no-extraneous-dependencies */
const Visualizer = require('webpack-visualizer-plugin');
const baseConfig = require('./webpack.common');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [new Visualizer()]
});
