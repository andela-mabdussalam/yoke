import path from 'path';
import webpack from 'webpack';
export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output:{
    path:  '/',
    filename: "bundle.js",
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot-loader','babel-loader']
      },
      {
       test: /(\.css)$/,
       loaders: ['style-loader', 'css-loader']
     },
     { test: /\.(jpg|png|svg)$/, loader: 'url-loader', options: { limit: 25000, }, }
    ]
  },
  resolve: {
    extensions:[".js"]
  }
}
