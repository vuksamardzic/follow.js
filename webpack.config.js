const path = require('path');
const env = require('yargs').argv.env;
const HtmlWebpackPlugin = require('html-webpack-plugin');

let filename = 'follow.js';
let dir = 'lib';
let plugins = [];

if (env === 'prod') {
    filename = 'follow.min.js';
} else if (env === 'demo') {
    filename = 'follow.min.js';
    dir = './';
    plugins.push(new HtmlWebpackPlugin({
        template: './demo/index.html',
        minify: {
            minifyCSS: true,
            minifyJS: true,
            collapseWhitespace: true
        }
    }));
} else if (env === undefined) {
    plugins.push(new HtmlWebpackPlugin({
        template: './demo/index.html'
    }));
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, dir),
        filename: filename,
        library: 'follow',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: plugins
};