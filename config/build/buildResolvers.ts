import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // для этих файлов не указываем расширение при импорте
        preferAbsolute: true, // в приоритете абсолютные пути
        modules: [options.paths.src, 'node_modules'], // путь до папки src и node_modules
        alias: {}, // указывается путь на прямую, т.е. shared/config, вместо @/shared/config
        mainFiles: ['index'], // для каждого модуля главный файл index
    };
}
