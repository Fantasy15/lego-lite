/**
 * @file webpack.config.online.js
 * @description webpack 线上环境配置
 */

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const args = process.argv;
const ifAnalyze = args.length >= 5 && args[4] === '--analyze';

module.exports = () => {
    return merge(baseConfig('online'), {
        mode: 'production',
        entry: {
            'lego-vue': './src/component/index.js',
        },
        output: {
            libraryTarget: 'umd',
            library: '[name]'
        },
        plugins: [
            ifAnalyze ? new BundleAnalyzerPlugin() : function(){},
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