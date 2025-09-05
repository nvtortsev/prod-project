import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

// хранение инфы о маршрутах в редаксе
export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

// сопоставление маршрутов с константами.
// [] необходимы для передачи динамического значения, вместо литеральных ключей
export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    // Последний
    [AppRouter.NOT_FOUND]: '*',
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
    [AppRouter.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
