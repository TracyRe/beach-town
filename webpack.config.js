const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },

  module: {
    rules: [

      {
       test: /\.scss$/,
       use: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       },
       {
        test: /\.(gif|png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/img/'
              }
            }
          ]
        },

      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      // {
      //   // test: /\.exec\.js$/,
      //   test: /\.js$/,
      //   use: [ 'script-loader' ]
      // }
    ]

  },

  plugins: [

      new HtmlWebpackPlugin({
        inject: 'body',
        template: './src/index.html',
        filename: 'index.html'
    }),

      new HtmlWebpackPlugin({
        template: './src/attractions.html',
        filename: 'attractions.html'
    }),

      new HtmlWebpackPlugin({
        template: './src/eat-stay.html',
        filename: 'eat-stay.html'
    }),

      new HtmlWebpackPlugin({
        template: './src/events.html',
        filename: 'events.html'
    }),

      new HtmlWebpackPlugin({
        template: './src/news.html',
        filename: 'news.html'
    })


  ]

};
