import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { WebpackPluginInstance } from 'webpack';

export const plugins: WebpackPluginInstance[] = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure'
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })
];