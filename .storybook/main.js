import { resolve } from 'path';

export const stories = ['../src/**/*.stories.@(js|jsx|ts|tsx)'];
export const addons = [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-webpack5-compiler-babel',
];
export const framework = {
    name: '@storybook/react-webpack5',
    options: {},
};
export async function webpackFinal(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        shared: resolve(__dirname, '../src/shared'),
    };

    config.module.rules = config.module.rules.filter((rule) => {
        if (!rule.test) return true;
        return (
            !rule.test.toString().includes('scss') &&
            !rule.test.toString().includes('css') &&
            !rule.test.toString().includes('sass')
        );
    });

    config.module.rules.push({
        test: /\.module\.scss$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]',
                        exportLocalsConvention: 'camelCase',
                        namedExport: false,
                    },
                    importLoaders: 2,
                },
            },
            'sass-loader',
        ],
        include: resolve(__dirname, '../src'),
    });

    return config;
}
export const docs = {
    autodocs: true,
};
