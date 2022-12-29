const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default
const HtmlInlineScriptPlugin = require('html-inline-script-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    open: false,
    watchFiles: ['src/**/*']
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: devMode ? [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin()
  ] : [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new HTMLInlineCSSWebpackPlugin(),
    new HtmlInlineScriptPlugin(),
    new CleanWebpackPlugin()
  ]
}
