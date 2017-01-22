var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './app/driver.js'
    },
    externals: {
        '$': 'jquery'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'underscore-template-loader'
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: 'app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'underscore'
        })
    ],
    resolve: {
        modulesDirectories: [__dirname + '/node_modules'],
        root: __dirname + '/app'
    },
    resolveLoader: {
        root: __dirname + '/node_modules'
    }
};
