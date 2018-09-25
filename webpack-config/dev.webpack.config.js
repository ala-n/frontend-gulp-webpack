module.exports = {
    context: __dirname + '/src/bundles-content/',
    mode: 'development',
    devtool: "cheap-module-inline-source-map",
    output: {
        path: __dirname + '/dest',
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