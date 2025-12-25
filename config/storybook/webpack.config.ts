import path from 'path'
import webpack from 'webpack'
import { buildSassModulesLoader } from '../build/loaders/buildSassModulesLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration}) => {

    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    }
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push(buildSassModulesLoader(true)); 

    return config
}