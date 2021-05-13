const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    open: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    historyApiFallback: {
      index: '/'
    }
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "projectB",
      filename: "entry.js",
      exposes: {
        './PageC': './src/pages/PageC',
        './PageD': './src/pages/PageD',
        './Button': "./src/components/Button",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
