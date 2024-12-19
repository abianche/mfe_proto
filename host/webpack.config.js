const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/bootstrap.js",
  output: {
    publicPath: "http://localhost:3000/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true, // ensures dev server will serve index.html on 404s
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        remote1: "remote1@http://localhost:3001/remoteEntry.js",
        remote2: "remote2@http://localhost:3002/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
