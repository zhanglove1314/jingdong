var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var data = require('./data.js');
module.exports = {
    entry: __dirname + '/src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.png|.jpg$/,
            use: ['url-loader']
        }]
    },
    devServer: {
        hot: true,
        port: 9990,
        host: '127.0.0.1',
        setup(app) {
            app.get('/some', function(req, res) {
                console.log(data);
                res.json(data);
            })
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
}