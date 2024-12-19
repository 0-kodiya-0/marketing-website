import type { ModuleOptions } from 'webpack';

export const rules: Required<ModuleOptions>['rules'] = [
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
    },
    {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
    }
];