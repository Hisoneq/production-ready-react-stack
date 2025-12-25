import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildSassLoader(isDev: boolean) {
    return {
      test: /\.s[ac]ss$/i,
      exclude: /\.module\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    };
  }