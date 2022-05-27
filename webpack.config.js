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
        template: './src/pages/about/comments.html',
        filename: 'comments.html'
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
        template: './src/pages/about/structure.html',
        filename: 'structure.html'
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
    new HtmlWebpackPlugin({
        template: './src/pages/press/news.html',
        filename: 'news.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/press/news-page.html',
        filename: 'news-page.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/press/social.html',
        filename: 'social.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/press/tours.html',
        filename: 'tours.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/purchases/purchases.html',
        filename: 'purchases.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/purchases/purchase-page.html',
        filename: 'purchase-page.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/purchases/all-purchases.html',
        filename: 'all-purchases.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/purchases/documents-purchases.html',
        filename: 'documents-purchases.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/purchases/plan-purchases.html',
        filename: 'plan-purchases.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/connect-fiz.html',
        filename: 'connect-fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/faq-fiz.html',
        filename: 'faq-fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/fiz.html',
        filename: 'fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/query-fiz.html',
        filename: 'query-fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/service-list-fiz.html',
        filename: 'service-list-fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/fiz/service-fiz.html',
        filename: 'service-fiz.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/jur/connect-jur.html',
        filename: 'connect-jur.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/jur/jur.html',
        filename: 'jur.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/jur/query-jur.html',
        filename: 'query-jur.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/jur/service-list-jur.html',
        filename: 'service-list-jur.html'
    }),
    new HtmlWebpackPlugin({
        template: './src/pages/jur/service-jur.html',
        filename: 'service-jur.html'
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