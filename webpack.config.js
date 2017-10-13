/**
 * Webpack build configuration
 */

var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlPlugin = require('html-webpack-plugin')
var HtmlHDDPlugin = require('html-webpack-harddisk-plugin')

module.exports = {
  // entry point
  entry: './src/main.js',

  // output config
  output: {
    path: path.resolve(__dirname, './dist/assets/'),
    publicPath: '/assets/',
    filename: 'build.[hash].js'
  },

  // module configurations
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            })
          },
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },

  // third-party libraries
  // these dependencies are (or should be) provided by the environment andd need not to be bundled
  externals: {
    vue: "Vue",
    swal: "swal",
    google: "google"
  },

  // plugins
  plugins: [
    new ExtractTextPlugin({
      filename: "[id]-[contenthash].css",
      disable: process.env.NODE_ENV != "production"
    }),
    new HtmlPlugin({
      filename: "../index.html",
      template: "./src/index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlHDDPlugin()
  ],

  // dev server and devtools
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: path.resolve(__dirname, "./dist")
  },
  devtool: '#inline-source-map'
}

// production config
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
