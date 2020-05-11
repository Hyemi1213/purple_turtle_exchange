const commonPaths = require('./common-paths');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
    app: [`${commonPaths.appEntry}/index.js`]
  },
  output: {
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: false,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              includePaths: [
                `${commonPaths.appEntry}/styles`
              ]
            }
          }, {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                sassOptions: {
                    includePaths: [
                        `${commonPaths.appEntry}/styles`,
                    ],
                },
            },
        },
        ]
      },{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.(png|jpg|gif|svg|mp4)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/images/[name].[ext]'
              }
            }
          ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/fonts/[name].[ext]'
              }
            }
          ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    // splitChunks: {
    //   chunks: 'all',
    //   minChunks: 2
    // }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.[hash].css'
    })
  ]
};
module.exports = config;