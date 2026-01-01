import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export default function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {

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
        }),
    ];
    
    if (isDev) {
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }))

        plugins.push(new ReactRefreshWebpackPlugin())
    }

    return plugins
}