import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {VueLoaderPlugin} from "vue-loader";

export type BuildMode = 'development' | 'production';
export interface BuildEnv {
    mode?: BuildMode,
    port: number,
}

interface configWebpack extends webpack.Configuration{
    devServer: DevServerConfiguration,
}

export default  (env: BuildEnv): configWebpack => {
    return {
        mode: env.mode,
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        output: {
            filename: "[name]-[contenthash].js",
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                'src': path.resolve(__dirname, 'src'),
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.(sass|scss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.svg$/,
                    use: [
                        'vue-loader',
                        'vue-svg-loader',
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new VueLoaderPlugin(),
            new webpack.ProgressPlugin(),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: false,
                __VUE_PROD_DEVTOOLS__: true,
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),
        ],
        devServer: {
            port: env.port || 3001,
            open: true,
            historyApiFallback: true,
        }
    }
}