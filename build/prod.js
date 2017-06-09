const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require("inline-manifest-webpack-plugin");


module.exports = function(env) {
  return webpackMerge(baseWebpackConfig, {
    entry: {
      'app': './script/index',
      'vendor': ['history','react','react-dom','react-router-dom']
    },
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, '../dist/'),
      publicPath: '/'
    },

    module: {
      rules: [
        { test: /\.html$/, loader: "html-loader" }
      ]
    },
    devtool: '#source-map',
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.CommonsChunkPlugin({
          name: ['vendor', 'manifest'],
          minChunks: Infinity
      }),
      
      new InlineManifestWebpackPlugin({
        name: 'webpackManifest'
      }),

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        },
        
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      })
    ]
  })
}