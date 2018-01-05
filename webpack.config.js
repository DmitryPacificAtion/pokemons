const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        script: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(ttf|svg|eot|png|jpg|gif)$/,
                loader: 'file-loader'
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 3000,
        disableHostCheck: true,
        historyApiFallback: true,
        open: true
        // proxy: {
        //     '/#': {
        //         target: 'http://192.168.5.196/v1/login',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // },
        // headers: {"Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": "true"}
    },
    plugins: [
        new ExtractTextPlugin('style.css', {allChunks: true})
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })*/
    ]
};