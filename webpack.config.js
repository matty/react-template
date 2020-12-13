const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'template.html'),
            minify: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: [ path.join(__dirname, 'src', 'main') ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'app.js'
    }
}
