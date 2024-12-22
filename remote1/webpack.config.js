const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3001/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    port: 3001,
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
      name: "remote1",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteButton": "./src/RemoteButton.jsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
        ramda: { singleton: true },
      },
    }),
  ],
};
