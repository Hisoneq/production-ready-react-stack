import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { buildSassModulesLoader } from '../build/loaders/buildSassModulesLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    if (!config) {
        return config;
    }

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.plugins = config.plugins || [];
    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
            __PROJECT__: JSON.stringify('storybook'),
        })
    );

    config.resolve = config.resolve || {};
    config.resolve.modules = config.resolve.modules || [];
    config.resolve.extensions = config.resolve.extensions || [];

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module = config.module || { rules: [] };
    
    const newRules: RuleSetRule[] = [];
    const oldRules = config.module.rules || [];
    
    for (const rule of oldRules) {
        if (rule && typeof rule === 'object' && !Array.isArray(rule)) {
            const webpackRule = rule as RuleSetRule;
            
            if (webpackRule.test) {
                const testStr = webpackRule.test.toString();
                if (testStr.includes('svg')) {
                    newRules.push({
                        ...webpackRule,
                        exclude: /\.svg$/i,
                    });
                    continue;
                }
            }
            
            newRules.push(webpackRule);
        }
    }

    newRules.push(buildSassModulesLoader(true)); 
    newRules.push(buildSassLoader(true));
    
    newRules.push(buildSvgLoader());
    
    config.module.rules = newRules;

    return config;
};