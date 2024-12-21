import type { ModuleOptions } from 'webpack';

export const rules: Required<ModuleOptions>['rules'] = [
    {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-react',
                    '@babel/preset-typescript'
                ]
            }
        }
    },
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
        test: /\.svg$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    context: 'src'
                }
            }
        ]
    }
];