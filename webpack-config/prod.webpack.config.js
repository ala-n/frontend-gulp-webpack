module.exports = {
    context: __dirname + '/src/bundles-content/',
    watch: false,
    mode: 'production',
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