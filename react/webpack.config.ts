import type { Configuration as WebpackConfig } from 'webpack';
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import * as path from 'path';

import type { Configuration as DevServerConfig } from 'webpack-dev-server';

interface Configuration extends WebpackConfig {
    devServer?: DevServerConfig;
}

const config: Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
    experiments: {
        topLevelAwait: true,
    },
    module: {
        rules
    },
    plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        compress: true,
        port: 3000,
        hot: true,
        open: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'source-map'
};

export default config;