var config = {
   entry: './main.js',
   mode: 'development',
   output: {
      path:'/',
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
              presets: ['es2015', 'react'],
              plugins: ['transform-class-properties']
            }
         }
      ]
   }
}
module.exports = config;

