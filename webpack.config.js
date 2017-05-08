module.exports = {
  entry: './react/App.js',
  output: {
    path: __dirname,
    filename: './public/bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
