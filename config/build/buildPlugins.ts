import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function buildPlugins({ paths, isDev, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {

    const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__ : JSON.stringify(apiUrl),
            __PROJECT__ : JSON.stringify(project)
        }),
    ];
    
    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
            excludeAssets: [/\.hot-update\.js$/, /\.hotUpdate\.js$/],
        }))

        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}