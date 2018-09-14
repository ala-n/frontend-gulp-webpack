const path = require('path');

module.exports = {
    context: __dirname + '/src/js',
    output: {
        path: __dirname + '/app',
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }]
    },
};