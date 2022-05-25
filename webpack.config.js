const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
let mode = 'development'

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,
    output: {
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/faq.html',
        filename: 'faq.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/about.html',
        filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/administration.html',
        filename: 'administration.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/vacancy.html',
        filename: 'vacancy.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/contacts.html',
        filename: 'contacts.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/history.html',
        filename: 'history.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/about/info.html',
        filename: 'info.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/dispatch/dispatch.html',
        filename: 'dispatch.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/dispatch/disable.html',
        filename: 'disable.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/dispatch/quality.html',
        filename: 'quality.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/dispatch/report.html',
        filename: 'report.html'
    }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    (mode === 'development') ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {

                                        },
                                    ]
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            }, 
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                type: 'asset/resource',
            }
            
        ]
    },
}