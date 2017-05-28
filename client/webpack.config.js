var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8088';

module.exports = {
    entry: [
        './src/index.tsx',
        './src/scss/global.scss'
    ],

    // Specify output
    output: {
        path: path.join(__dirname, 'build/'),
        filename: 'bundle.js'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    // Start a dev server from build src
    devServer: {
        contentBase: './build',
        // do not print bundle build stats
        noInfo: true,
        // enable HMR
        hot: false,
        // embed the webpack-dev-server runtime into the bundle
        inline: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            
            // All files with a '.css' '.scss' extension will be handled by 'css-loader' or 'sass-loader'
            { 
                test: /(\.css|\.scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
             },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            files: {
                js: ['bundle.js'],
            }
        }),
        //Generate bundle.css => https://github.com/webpack/extract-text-webpack-plugin
        new ExtractTextPlugin('bundle.css'),
    ]
};