module.exports = {
    entry: ["./src/entry.js"],
    output: {
        output: {
            path: "./dist"
        },
        filename: "bundle.js"
    },
    module: {
        loader: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
    },
    devtool: "source-map"
}