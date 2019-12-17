const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
  mode: 'development',
  entry: {
    app: resolve(__dirname, '../src/app.jsx')
  },
  module: {
    rules: [
      // {
      //   // enforce: 'pre', 不强制使用
      //   test: /(\.js$)/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },

      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|jpg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [  '.js', '.jsx'],
    // alias: {
    //   vue: 'vue/dist/vue.js'
    // }
  },
  output: {
    path: resolve(__dirname, '../dist'),

    publicPath: '/',
    filename: '[name].js'
  },

  // devServer: {
  //   contentBase: './dist',
  // },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, '..', 'src', 'index.html'),
      alwaysWriteToDisk: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}

module.exports = config
