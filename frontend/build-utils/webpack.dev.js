const commonPaths = require('./common-paths');

const webpack = require('webpack');

const port = process.env.PORT || commonPaths.port;

const config = {
  mode: 'development',
  entry: {
    app: `${commonPaths.appEntry}/index.js`
  },
  output: {
    filename: '[name].[hash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              includePaths: [
                `${commonPaths.appEntry}/styles`
              ]
            },
          },
          {
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
        }
        ]
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },{
        test: /\.styl$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              // sourceMap: true
            },
          },
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true
            },
          },
        ]
      }, {
        test: /\.(png|jpg|gif|svg|mp4|woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    hot: true,
    open: true
  }
};
module.exports = config;
