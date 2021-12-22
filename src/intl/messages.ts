import { LOCALES } from './locales';

interface Props {
    [key: string]: Record<string, string>
}

export const messages: Props = {
    [LOCALES.ENGLISH]: {
        "Log in": "Log in",
        "Log out": "Log out",
        "Users": "Users",
        "User Info": "User Info",
        "years old": "years old",
        "Date of birth": "Date of birth",
        "male": "male",
        "female": "female",
        "Email": "Email",
        "Phone": "Phone",
        "Address": "Address",
        "City": "City",
        "With us": "With us",
        "registered on": "registered on",
        "years": "years",
        "Select user title": "Please select a user to see his full information",
        "Select user": "Select User"
    },
    [LOCALES.RUSSIAN]: {
        "Log in": "Войти",
        "Log out": "Выйти",
        "Users": "Пользователи",
        "User Info": "Инфо пользователя",
        "years old": "лет",
        "Date of birth": "Дата рождения",
        "male": "муж",
        "female": "жен",
        "Email": "Имейл",
        "Phone": "Тел.",
        "Address": "Адрес",
        "City": "Город",
        "With us": "С нами",
        "registered on": "зарегистрирован в",
        "years": "лет",
        "Select user title": "Пожалуйста, выберите пользователя",
        "Select user": "Выбери пользователя"
    },
    [LOCALES.UKRAINIAN]: {
        "Log in": "Увійти",
        "Log out": "Вийти",
        "Users": "Користувачі",
        "User Info": "Інформація користувача",
        "years old": "років",
        "Date of birth": "Дата народження",
        "male": "чол",
        "female": "дів",
        "Email": "Імейл",
        "Phone": "Тел.",
        "Address": "Адреса",
        "City": "Місто",
        "With us": "З нами",
        "registered on": "зареєстрований в",
        "years": "років",
        "Select user title": "Будь ласка, оберіть користувача",
        "Select user": "Оберіть користувача"
    }

}