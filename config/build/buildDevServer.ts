import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // автоматические открывает страницу в браузере
        // при запросе к путям, которых нет на сервере, возвращает index.html
        historyApiFallback: true,
        hot: true, // Горячая замена модуля HMR
    };
}
