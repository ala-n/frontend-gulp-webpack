const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const TS_CONFIG = path.join(__dirname, '../tsconfig.json');

module.exports = {
    context: __dirname + '/src/bundles/',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    // disable type checker - we will use it in fork plugin
                    transpileOnly: true,
                    configFile: TS_CONFIG
                }
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: TS_CONFIG
        })
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
};