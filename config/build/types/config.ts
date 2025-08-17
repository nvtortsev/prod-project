export type BuildMode = "production" | "development";

export interface BuildPaths {
    entry: string; // путь для entry поинта
    build: string; // путь до папки build
    html: string; // путь до файла public/index.html
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
}
