const TsErrorPlugin = require('fork-ts-checker-webpack-plugin');
const TsPathPlugin = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const {resolve} = require('./utils');
const {TS} = require('./constants');

/**
 *
 * @param {any} env
 * @returns {import('webpack').Configuration}
 */
module.exports = () => {
  return {
    target: 'node',
    mode: 'production',
    entry: {
      index: resolve('src/index.ts')
    },
    output: {
      path: resolve('build'),
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: TS,
          loader: 'babel-loader',
          options: {
            configFile: resolve('config/.babelrc')
          }
        }
      ]
    },
    plugins: [new TsErrorPlugin()],
    resolve: {
      extensions: ['.js', '.ts'],
      plugins: [new TsPathPlugin({configFile: resolve('tsconfig.json')})]
    },
    externals: [nodeExternals()]
  };
};
