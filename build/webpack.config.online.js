/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = () => {
    return merge(baseConfig('online'), {
        mode: 'production',
        output: {
            libraryTarget: 'umd',
            library: '[name]'
        },
        plugins: [
            new BundleAnalyzerPlugin(),
            new CleanWebpackPlugin(),

        ],
        externals: {
            vue: {
                root: 'Vue',
                commonjs: 'vue',
                commonjs2: 'vue',
                amd: 'vue',
            }
        },
        performance: {
            hints: 'warning'
        },
    })
}