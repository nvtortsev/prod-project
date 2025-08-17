import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"], // для этих файлов не указываем расширение при импорте
    };
}
