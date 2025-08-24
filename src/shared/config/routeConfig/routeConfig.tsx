import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from 'react-router-dom';

// хранение инфы о маршрутах в редаксе
export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
}

// сопоставление маршрутов с константами.
// [] необходимы для передачи динамического значения, вместо литеральных ключей
export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
};

// объявление route
export const routeConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRouter.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
};
