const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function(env) {
  return webpackMerge(baseWebpackConfig, {
    entry: [
       'react-hot-loader/patch',
       // activate HMR for React

       'webpack-dev-server/client?http://localhost:8090',
       // bundle the client for webpack-dev-server
       // and connect to the provided endpoint

       'webpack/hot/only-dev-server',
       // bundle the client for hot reloading
       // only- means to only hot reload for successful updates

         './script/index'
       // the entry point of our app
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, '../dist/'),
      publicPath: '/'
    },

    module: {
      rules: [
        {
          test: /\.html$/,
          loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
        },
      ]
    },

    devtool: '#eval-source-map',

    devServer: {
      hot: true,
      // 开启服务器的模块热替换(HMR)
      port: 8090,

      historyApiFallback: true,
     // respond to 404s with index.html

      contentBase: path.resolve(__dirname, '../src/'),
      // 输出文件的路径
    },

    plugins: [

      new webpack.HotModuleReplacementPlugin(),
      // 开启全局的模块热替换(HMR)

      new webpack.NamedModulesPlugin(),
      // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    ]
  })

}