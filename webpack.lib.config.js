// library building webpack config file
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    // where is lib main file located
    entry: './src/ts/lib/core/json2html.ts',

    // lib build ouput
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'json2html.min.js',
        library: {
            type: 'module', // useing ESM type for browser only support
        },
    },

    experiments: {
        outputModule: true, // for 'library.type' = 'module'
    },

    module: {
        // Use `ts-loader` with special ts config to build 'lib'
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.lib.json',
                },
            },
        ],
    },

    // Bundle '.ts' files
    resolve: {
        extensions: ['.ts',],
    },

    optimization: {
        minimize: true, 
        minimizer: [
            new TerserPlugin({
                exclude: /themes/, 
            }),
        ],
    },

    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: "./src/ts/lib/theming/themes/",
                to: "./themes/",
            }],
        }),
    ],
}