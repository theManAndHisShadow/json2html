// demo app building webpack config file

console.log('NB: build process of demo app is broken now!');

// now broken
// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

// module.exports = {
//     entry: {
//         'lib/json2html': './src/ts/lib/core/json2html.ts',
//         'app': './src/ts/demo/app.ts',
//     },

//     mode: 'development',

//     module: {
//         // Use `ts-loader` on any file that ends in '.ts'
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/,
//             },
//         ],
//     },
//     // Bundle '.ts' files as well as '.js' files.
//     resolve: {
//         extensions: ['.ts', '.js'],
//     },

//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'js/[name].js',
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             inject: false,
//         }),
//         new CopyWebpackPlugin({
//             patterns: [{
//                 from: "./src/css/",
//                 to: "./css/",
//                 globOptions: {
//                     // this line helps avoid compile final dist with samples folder
//                     ignore: [
//                         '**/css/samples/**',
//                     ]
//                 }
//             }],
//         }),
//     ],
// }