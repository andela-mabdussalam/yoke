import express from 'express';
import path from 'path';
import webpack from 'webpack';
import bodyParser from 'body-parser';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import WebpackConfig from '../webpack.config.dev';

import users from './routes/users';

const app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const compiler = webpack(WebpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: WebpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, () => console.log('Running on localhost:3000'));
