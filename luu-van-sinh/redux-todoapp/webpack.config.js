const config = {
  mode: 'development',
  output: {
    path: __dirname + 'src',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}
module.exports = config
