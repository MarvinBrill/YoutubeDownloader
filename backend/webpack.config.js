const path = require("path");
const nodeExternals = require("webpack-node-externals");
const WebPackShellPlugin = require("webpack-shell-plugin-next");

const env = process.env.NODE_ENV ?? "production";

module.exports = {
  entry: "./src/index.js",
  mode: env,
  stats: "errors-only",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    new WebPackShellPlugin({
      onWatchRun: {
        scripts: ["nodemon build/index.js"],
        blocking: false,
        parallel: true,
      },
    }),
  ],
  watch: env === "development",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js"],
  },
};
