import { lazy } from "react";

export const MainPageAsync = lazy(() => import("./MainPage"));

// делает компонент асинхронным, т.е. загружает по мере необходимости. создает отдельный чанк(файл) для этого компонента
