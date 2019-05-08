const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './static/js',
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ],
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/'),
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: './'
  }
};