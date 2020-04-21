/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = () => {
    return merge(baseConfig('online'), {
        output: {
            libraryTarget: 'umd',
            library: '[name]'
        },
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin(),
        ],
        performance: {
            hints: 'warning'
        }
    })
}