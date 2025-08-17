import { createContext } from "react";

//перечисление тем
export enum Theme {
    LIGHT = "light",
    DARK = "dark",
}
//свойства контекста темы
export interface ThemeContextProps {
    theme?: Theme; //текущая тема
    setTheme?: (theme: Theme) => void; //функция смены темы
}

//создание контекста с начальным значением (пустой объект)
export const ThemeContext = createContext<ThemeContextProps>({});

//ключ, под которым будет сохраняться тема в LocalStorage
export const LOCAL_STORAGE_THEME_KEY = "theme";
