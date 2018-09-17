module.exports = {
  context: __dirname + '/src/js',
  entry: {
    index: './index',
  },
  output: {
    path: __dirname + '/app/js',
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