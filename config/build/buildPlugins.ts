import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

// функция, котрая возвращает список плагинов
export function buildPlugins({
    paths,
    isDev,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(), // отчет о ходе компиляции
        new HTMLWebpackPlugin({
            template: paths.html, // создает html по шаблону public/index.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css', // какие названия и где они будут расоплагаться
            chunkFilename: 'css/[name].[contenthash:8].css', // разбитие файлов на асинхронные
        }),
        // нужен для прокидывания глобальных переменных в само приложение
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];
}
