const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        src: './client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), 
        publicPath: '/', 
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.s?css/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    devServer: {
        static: {
            publicPath: '/dist',
            directory: path.resolve(__dirname, 'dist')
        },
        proxy: {
            '/': {
                target: 'http://localhost:3000', 
                secure: false,
            },
        }, 
    compress: true,
    port: 8080,
    }, 
    mode: process.env.Node_ENV
}