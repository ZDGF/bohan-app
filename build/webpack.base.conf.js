const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: "css/base.[hash].css",
    // disable: process.env.NODE_ENV === "development"
});
const extractCSSModule = new ExtractTextPlugin({
    filename: "css/app.[hash].css",
});

module.exports = {
  context: path.resolve(__dirname, "../src"),
  
  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src/script')],
        loaders: extractCSSModule.extract({
          fallback:'style-loader',
          use:[{loader:'css-loader?modules&importLoaders=1&localIdentName=[name]___[hash:base64:5]'}, //react css module 配置
          // 'resolve-url-loader',  //may need this (https://www.npmjs.com/package/resolve-url-loader)
          {loader:'less-loader'}]
        })
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, '../src/style')],
        loaders: extractLess.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|eot|svg|ttf|woff|woff2)$/i,
        loader: "file-loader?name=[path][name].[ext]"
      }
    ]
  },

  plugins: [
      extractLess,
      extractCSSModule,
      new HtmlWebpackPlugin({
        filename: 'main.html',
        template: 'main.ejs' 
      })
  ],

  resolve: {
    extensions: ['.js', '.less']
  }
}
