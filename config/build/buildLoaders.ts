import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export default function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            outputPath: 'images',
        },
    };

    // Очередь подгрузки лоадеров важна
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

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
    };

    // Обычные CSS файлы (.css) - исключаем .module.css
    const cssLoader = {
        test: /\.css$/i,
        exclude: [/node_modules/, /\.module\./],
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader'
        ],
    };

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
    };

    // Обычные SCSS файлы (.scss, .sass) - исключаем .module.scss
    const sassLoader = {
        test: /\.s[ac]ss$/i,
        exclude: [/node_modules/, /\.module\./],
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
        ],
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const babelLoader = {
        test: /\.(js|jsx|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript'
                ]
            }
        }
    };

    return [
        svgLoader,
        fileLoader,
        tsLoader,
        //babelLoader,
        cssModulesLoader,  // сначала модульные CSS (более специфичные)
        cssLoader,
        sassModulesLoader,
        sassLoader
    ];
}