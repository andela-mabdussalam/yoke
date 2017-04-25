import express from 'express';
import webpack from 'webpack';
import path from 'path';
import routes from './routes';


// import WebpackConfig from '../webpack.config.dev';
import config from '../webpack.config.dev';
// const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');


// Set up the express app
const app = express();
const router = express.Router();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('', router);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('/', (req, res) => res.status(200).send({
//   message: 'Welcome to the beginning of nothingness.',
// }));
// app.get('/users', users.findAll);
routes(router);
app.listen(3000, () => console.log('Running on localhost:3000'));
