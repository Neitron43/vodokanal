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
    })],
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