import { ENGLISH } from './languages/english';
import { RUSSIAN } from './languages/russian';
import { UKRAINIAN } from './languages/ukrainian';
import { LOCALES } from './locales';

interface Props {
    [key: string]: Record<string, string>
}

export const messages: Props = {
    [LOCALES.ENGLISH]: ENGLISH,
    [LOCALES.RUSSIAN]: RUSSIAN,
    [LOCALES.UKRAINIAN]: UKRAINIAN
};