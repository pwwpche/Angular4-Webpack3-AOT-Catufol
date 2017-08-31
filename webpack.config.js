const ngToolsWebpack = require('@ngtools/webpack');

//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: './app/main.jit.ts',
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'app.main.js'
    },
    plugins: [
        //new CopyWebpackPlugin([
        //	{from: './index.html'}
        //]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.ts$/, loader: 'ts-loader!angular2-template-loader'}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};
