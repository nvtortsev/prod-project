import { lazy } from 'react';

export const AboutPageAsync = lazy(() => import('./AboutPage'));

// делает компонент асинхронным, т.е. загружает по мере необходимости.
// создает отдельный чанк(файл) для этого компонента
