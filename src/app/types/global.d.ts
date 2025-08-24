declare module '*.scss';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
    const content: any;
    export default content;
}

declare const __IS_DEV__: boolean;
