import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildSassLoader } from '../build/loaders/buildSassLoader';
import { buildSassModulesLoader } from '../build/loaders/buildSassModulesLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration}) => {

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.plugins.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true), 
        })
    );

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildSassModulesLoader(true)); 
    config.module.rules.push(buildSassLoader(true));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i};
        }

        return rule;
    })
    
    config.module.rules.push(buildSvgLoader());

    return config
}