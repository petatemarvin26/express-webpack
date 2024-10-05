const { DefinePlugin } = require("webpack");
const TsErrorPlugin = require("fork-ts-checker-webpack-plugin");
const TsPathPlugin = require("tsconfig-paths-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const { resolve, getenv } = require("./utils");
const { TS } = require("./constants");

/**
 *
 * @param {any} env
 * @returns {import('webpack').Configuration}
 */
module.exports = () => {
  const envobj = getenv();
  return {
    target: "node",
    mode: "production",
    entry: {
      index: resolve("src/index.ts"),
    },
    output: {
      path: resolve("build"),
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: TS,
          loader: "babel-loader",
          options: {
            configFile: resolve("config/.babelrc"),
          },
        },
      ],
    },
    plugins: [
      new TsErrorPlugin(),
      new DefinePlugin({
        "process.env": JSON.stringify(envobj),
      }),
    ],
    resolve: {
      extensions: [".js", ".ts"],
      plugins: [new TsPathPlugin({ configFile: resolve("tsconfig.json") })],
    },
    externals: [nodeExternals()],
  };
};
