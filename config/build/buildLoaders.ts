import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
export default function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    // Очередь подгрузки лоадеров важна
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // Модульные CSS файлы (.module.css)
    const cssModulesLoader = {
        test: /\.module\.css$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        mode: 'local',
                        exportLocalsConvention: 'camelCase'
                    },
                    esModule: false
                }
            }
        ],
        exclude: /node_modules/,
    }

    // Обычные CSS файлы (.css) - исключаем .module.css
    const cssLoader = {
        test: /\.css$/i,
        exclude: [/node_modules/, /\.module\./],
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
        ],
    }

    // Модульные SCSS файлы (.module.scss, .module.sass)
    const sassModulesLoader = {
        test: /\.module\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                        mode: 'local',
                        exportLocalsConvention: 'camelCase'
                    },
                    esModule: false
                }
            },
            'sass-loader'
        ],
        exclude: /node_modules/,
    }

    // Обычные SCSS файлы (.scss, .sass) - исключаем .module.scss
    const sassLoader = {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/, /\.module\./],
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
    }

    return [
        tsLoader,
        cssModulesLoader,  // сначала модульные CSS (более специфичные)
        cssLoader,
        sassModulesLoader, 
        sassLoader,
    ]
}