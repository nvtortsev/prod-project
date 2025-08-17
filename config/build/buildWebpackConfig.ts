import { BuildOptions } from "./types/config";
import webpack from "webpack";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackCondig(
    options: BuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode: mode, // development или production
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js", // создает уникальную сборку
            path: paths.build,
            clean: true, // удаляет предыдущую сборку
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}

// Файл конфигурации webpack.
// entry - главный файл проекта (src/index.ts)
// output - сборка проекта (build/уникальный ts файл)
// mode - режим сборки
// plugins - плагины
