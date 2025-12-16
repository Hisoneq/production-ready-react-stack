import webpack from 'webpack';
import buildWebpackConfig from './config/build/buildWebpackConfig';
import path from 'path';
import { BuildPaths } from './config/build/types/config';

const Path: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: Path,
    isDev,
});

export default config;