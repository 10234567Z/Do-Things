const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module:{
        rules: [
            {
                test: /\.css$/,
                use:  ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/,
                use: 'asset/resource',
            },
        ],
    },
    devServer:{
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Do-Thing',
        }),
    ],
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },
    optimization:{
        runtimeChunk: 'single',
    },
}