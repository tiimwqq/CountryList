import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "countryList": "Country List",
            "changeLanguage": "Change Language",
            "search": "Search...",
            "Loading...": "Loading...",
            "Error loading country details": "Error loading country details",
            "Capital": "Capital",
            "Region": "Region",
            "Population": "Population",
            "Borders with": "Borders with",
            "No data": "No data",
            "No borders": "No borders",
            "Back": "Back",
            "population": "Population",
            "Without sorting": "Without sorting",
            "Descending": "Descending",
            "Ascending": "Ascending",
            "All": "All",
            "Africa": "Africa",
            "Americas": "Americas",
            "Asia": "Asia",
            "Europe": "Europe",
            "Oceania": "Oceania",
        }
    },
    ru: {
        translation: {
            "countryList": "Список стран",
            "changeLanguage": "Сменить язык",
            "search": "Поиск...",
            "Loading...": "Загрузка...",
            "Error loading country details": "Ошибка при загрузке данных о стране",
            "Capital": "Столица",
            "Region": "Регион",
            "Population": "Население",
            "Borders with": "Граничит с",
            "No data": "Нет данных",
            "No borders": "Нет границ",
            "Back": "Назад",
            "population": "Население",
            "Without sorting": "Без сортировки",
            "Descending": "По убыванию",
            "Ascending": "По возрастанию",
            "All": "Все",
            "Africa": "Африка",
            "Americas": "Америка",
            "Asia": "Азия",
            "Europe": "Европа",
            "Oceania": "Океания",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", // Язык по умолчанию
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        debug: true, // Включает логи в консоли
    });

console.log("i18n initialized:", i18n.language); // Добавь этот лог

export default i18n;
