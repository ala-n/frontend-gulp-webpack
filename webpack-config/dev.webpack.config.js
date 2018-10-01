module.exports = {
  context: __dirname + '/src/bundles-content/',
  mode: 'development',
  // devtool: "cheap-module-inline-source-map",
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};