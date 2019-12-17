const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 
// baseConfig.plugins.push(new BundleAnalyzerPlugin());

baseConfig.optimization = {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      routerBase: {
        name: 'routerBase',
        test: (module) => {
          return /react-icons/.test(module.context);
        },
        chunks: 'initial',
        priority: 11,
      },
      reactBase: {
        name: 'reactBase',
        test: (module) => {
          return /react|react-dom|react-router-dom/.test(module.context);
        },
        chunks: 'initial',
        priority: 10,
      }, 
      common: {
        name: 'common',
        chunks: 'initial',
        priority: 2,
        minChunks: 2,
      },
    }
  },
};

module.exports = { ...baseConfig };
