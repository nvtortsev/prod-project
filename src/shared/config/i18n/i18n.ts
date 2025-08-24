import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend)
    // определить язык пользователя
    .use(LanguageDetector)
    // передаем экземпляр i18n в react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        fallbackLng: 'ru',
        debug: !!__IS_DEV__,

        interpolation: {
            escapeValue: false, // не требуется для React, так как он экранируется по умолчанию
        },

        backend: {
            // чтобы использовать определенный файл например useTranslation('main')
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
