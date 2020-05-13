/**
 * @file webpack.config.dev.js
 * @description webpack 开发环境配置文件, 启动了devServer
 */

const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config');


module.exports = () => {
    return merge(baseConfig('dev'), {
        mode: 'development',
        entry: {
            'lego-vue': './examples/index.js',
        },
        devtool: 'inline-source-map',
        plugins: [
            new HtmlWebPackPlugin({
                filename: `./index.html`,
                template: path.resolve(`./examples/index.html`),
            })
        ],
        performance: {
            hints: false
        }
    });
};