import webpack from 'webpack';

export default function buildLoaders(): webpack.RuleSetRule[] {

    // Очередь подгрузки лоадеров важна
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
    }

    return [
        tsLoader,
        sassLoader,
        cssLoader,
    ]
}