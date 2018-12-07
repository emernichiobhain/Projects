const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: __dirname + '/src'
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'bundle.js'
//     }
// };