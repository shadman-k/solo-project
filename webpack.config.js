const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js', //path.join(__dirname, "src", "index.js"),
    output: {
      path: path.join(__dirname, "build"),
      publicPath: '/build/',
      filename: "index.bundle.js",
    },
    devtool: 'eval-source-map',
    mode: process.env.NODE_ENV || "development",
    // resolve: {
    //   modules: [path.resolve(__dirname, "src"), "node_modules"]
    // },
    // devServer: {
    //   contentBase: path.join(__dirname, "src"),
    //   publicPath: '/build',
    //   proxy: {
    //     '/api': 'http://localhost:3000'
    //   }
    // },
    devServer: {
      host: 'localhost',
      port: 8080,
      contentBase: path.resolve(__dirname, 'build'),
      hot: true,
      publicPath: '/',
      historyApiFallback: true,
      // inline: true,
      // headers: { 'Access-Control-Allow-Origin': '*' },
      proxy: {
        '/': {
          target: 'http://localhost:3000/',
          secure: false,
        },
        // '/assets/**': {
        //   target: 'http://localhost:3000/',
        //   secure: false,
        // },
      },
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        },
        {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: ["file-loader"]
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
    resolve: {
      // Enable importing JS / JSX files without specifying their extension
      extensions: ['.js', '.jsx'],
    },
};