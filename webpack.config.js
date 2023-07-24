const path = require("path");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: {
    filer: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    library: "Filer"
  },
  plugins: [
		new NodePolyfillPlugin()
	],
  devtool: "source-map"
};
