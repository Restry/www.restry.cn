const { resolve } = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const fallback = require('connect-history-api-fallback')
// const logger = require('../logger');
const config = require('./webpack.config');

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const setupApiRoutes = require('./middlewares/api');
// const logger = require('./logger');
const path = require('path');
const api = require('./yuque');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

config.entry.app = [
  `webpack-hot-middleware/client?http://localhost:${process.env.HTTP_PORT}&reload=true`,
  config.entry.app
]
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NamedModulesPlugin());
config.mode = process.env.NODE_ENV;

const compiler = webpack(config);

function setup(app) {
  app.use(
    webpackDevMiddleware(compiler, {
      // logger,
      publicPath: config.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));


  // all other requests be handled by UI itself
  app.get('/', (req, res) => res.sendFile(resolve(__dirname, '../dist/index.html')));


};



const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? setup : () => { };


function onUnhandledError(err) {
  try {
    console.error(err);
  } catch (e) {
    console.log('LOGGER ERROR:', e); // eslint-disable-line no-console
    console.log('APPLICATION ERROR:', err); // eslint-disable-line no-console
  }
  process.exit(1);
}

process.on('unhandledRejection', onUnhandledError);
process.on('uncaughtException', onUnhandledError);

const app = express();

app.use('/api', api);
app.use('/static', express.static(path.resolve(__dirname, '../static')));

app.set('env', process.env.NODE_ENV);
// logger.info(`Application env: ${process.env.NODE_ENV}`);

// app.use(logger.expressMiddleware);
app.use(bodyParser.json());

app.use(fallback());
// application routes
// setupApiRoutes(app);
setupAppRoutes(app);


http.createServer(app).listen(process.env.HTTP_PORT, () => {
  console.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
