module.exports = {
  context: __dirname + '/src/components/bundles',
  entry: {
    index: './bundle',
  },
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