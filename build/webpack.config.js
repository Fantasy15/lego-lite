/**
 * @file webpack.config.js
 * @description webpack 基础配置
 */

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const IconFontPlugin = require('icon-font-loader').Plugin;
const babelConfig = require('./babel.config');
const WebpackBar = require('webpackbar');

module.exports = (env) => {

    let isDev = env === 'dev';

    return {
        context: path.resolve(__dirname, '../'),
        output: {
            publicPath: '/',
            path: path.resolve(`dist`),
            filename: `[name].js`
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: babelConfig
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true
                            }
                        },
                    ]
                },
                {
                    test: /\.(jpeg|jpg|png|gif|woff|ttf)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: `images/[name].${isDev ? '' : '.[hash:8]'}.[ext]`,
                    }
                }
            ]
        },
        plugins: [
            new IconFontPlugin(),
            new VueLoaderPlugin(),
            new WebpackBar()
        ],
        resolve: {
            // 配置别名，在项目中可缩减引用路径，大写防止混淆
            alias: {
                Component: path.resolve('./component'),
                _Style: path.resolve('./component/_style')
            }
        },
        stats: {
            children: false,
            modules: false
        }
    }
}