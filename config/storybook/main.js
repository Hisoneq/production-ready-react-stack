import path from 'path';

module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
    ],
    framework: {
        name: '@storybook/react-webpack5',
    },
    docs: {
        autodocs: true,
    },

    webpackFinal: async (config) => {
        config.resolve = config.resolve || {};
        config.resolve.alias = {
            ...config.resolve.alias,

            app: path.resolve(__dirname, '../../src/app'),
            pages: path.resolve(__dirname, '../../src/pages'),
            widgets: path.resolve(__dirname, '../../src/widgets'),
            features: path.resolve(__dirname, '../../src/features'),
            entities: path.resolve(__dirname, '../../src/entities'),
            shared: path.resolve(__dirname, '../../src/shared'),

            public: path.resolve(__dirname, '../../public'),
        };

        return config;
    },
};
