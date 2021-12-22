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
        "Registration date": "Registration date",
        "Please select user": "Please select a user to see his full information",
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
        "Registration date": "Дата регистрации",
        "Please select user": "Пожалуйста, выберите пользователя",
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
        "Registration date": "Дата реєстрації",
        "Please select user": "Будь ласка, оберіть користувача",
        "Select user": "Оберіть користувача"
    }

}