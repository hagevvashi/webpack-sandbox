import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

if (process.env["NODE_ENV"] === undefined) {
  throw new Error("NODE_ENV is undefined");
}

if (process.env["NODE_ENV"] !== "production" && process.env["NODE_ENV"] !== "development") {
  throw new Error("NODE_ENV must be \"production\" or \"development\"");
}

const base: Configuration = {
  mode: process.env["NODE_ENV"],
  entry: "./src/index.ts",
  output: {
    path: path.resolve("dist"),
    filename: "[name].bundle.[contenthash].js"
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
  ]
};

export default base;