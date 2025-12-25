import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildSassModulesLoader(isDev: boolean){
    return {
            test: /\.module\.s[ac]ss$/i,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
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
}