var path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/testHelper.js'
    ],
    preprocessors: {
      'test/testHelper.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'eval-source-map',
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|test)/,
            loader: 'isparta'
          },
          {
            test: /\.json$/,
            include: [
              /node_modules/,
              path.resolve(__dirname, '..')
            ],
            loader: 'json-loader'
          }
        ]
      },
      resolve: {
        root: path.resolve('./src')
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [
      'spec',
      'coverage'
    ],
    specReporter: {
      maxLogLines: 1,
      suppressPassed: true
    },
    coverageReporter: {
      dir: 'coverage',
      subdir: '.',
      type: 'html'
    }
  })
}
