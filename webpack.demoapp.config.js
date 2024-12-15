// demo app building webpack config file
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'app': './src/demo/ts/app.ts',
    },

    module: {
        // Use `ts-loader` with special ts config to build 'lib'
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.demoapp.json',
                },
            },
        ],
    },

    // Bundle '.ts' files as well as '.js' files.
    resolve: {
        extensions: ['.ts', '.js'],
    },

    output: {
        path: path.resolve(__dirname, './demo'),
        filename: 'js/[name].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/demo/index.html',
            minify: false,
            inject: false,
        }),

        new CopyWebpackPlugin({
            patterns: [{
                from: "./src/demo/css/",
                to: "./css/",
                globOptions: {
                    // this line helps avoid compile final dist with samples folder
                    ignore: [
                        '**/css/samples/**',
                    ]
                }
            }],
        }),
    ],
}