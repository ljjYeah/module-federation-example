const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: {
      index: '/'
    }
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  module: {
    rules: [
      {
        test: /bootstrap\.jsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "projectA",
      filename: "entry.js",
      remotes: {
        projectB: `projectB@//localhost:3002/entry.js`,
      },
      exposes: {
        './PageA': './src/pages/PageA',
        './PageB': './src/pages/PageB',
      },
      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
    }),
  ],
};
