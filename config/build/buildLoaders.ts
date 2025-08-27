import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

// функция, которая возвращает список лоадеров
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // лоадер для работы с png, jpeg, gif
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        { locales: ['ru', 'en'], keyAsDefaultValue: true },
                    ],
                ],
            },
        },
    };

    // лоадер для работы с svg
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    // лоадер для css/scss
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')), // css-модули для файлов с раширением .module.
                        localIdentName: options.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            // Compiles Sass to CSS
            'sass-loader',
        ],
    };
    // лоадер для ts
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    // порядок лоадеров имеет значение
    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
