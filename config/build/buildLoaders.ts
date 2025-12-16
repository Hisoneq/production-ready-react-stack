import webpack from 'webpack';

export default function buildLoaders(): webpack.RuleSetRule[] {

    // Очередь подгрузки лоадеров важна
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader,
    ]
}