const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production'
        ? 'production'
        : 'development',
    entry: ['./app/src/index.js'],
    output: {
        path: path.join(__dirname, './public'),
        filename: 'scripts/bundle.js'
    },
    resolve: {
        fallback: {
            "assert": false
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: path.join(__dirname, './app/index.html'),
            favicon: path.join(__dirname, './app/favicon.png')
        })
    ]
};