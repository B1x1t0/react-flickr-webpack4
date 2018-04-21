/*** webpack.config.js ***/
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
/*const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});*/

const htmlWebpackPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });
module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        path: path.join(__dirname, "build/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            
            {
                test: /\.css$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      modules: true,
                      importLoaders: 1,
                      localIdentName: "[name]_[local]_[hash:base64]",
                      sourceMap: true,
                      minimize: true
                    }
                  }
                ]
              
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};