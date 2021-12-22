import { Language, UserType } from "../interfaces";
import {
    IS_AUTHORIZED,
    IS_FETCHING,
    SET_CHOSEN_USER,
    SET_USERS,
    SET_CURRENT_PAGE_NUMBER,
    SET_PREVIOUS_PAGE_NUMBER,
    RESET_CHOSEN_USER,
    SET_LOCAL_LANGUAGE,
} from "./types";

interface InitialState {
    users: UserType[];
    isAuthorized: boolean;
    isFetching: boolean;
    chosenUser: UserType | null;
    pageNumbers: Record<string, number>;
    localLanguage: {
        value: string;
        name: string;
    };
}

interface Action {
    type: string;
    payload: string | boolean | UserType[] | Language;
    chosenUser: UserType;
}

const initialState: InitialState = {
    users: [],
    isAuthorized: Boolean(sessionStorage.getItem("is_Authorized")) || false,
    isFetching: false,
    chosenUser: null,
    pageNumbers: { current: 1, previous: 0 },
    localLanguage: {
        value: 'en-US',
        name: "ENGLISH"
    }
};

const rootReducer = (
    state: InitialState = initialState,
    { type, payload, chosenUser }: Action
): InitialState => {
    const pageNumbers = state.pageNumbers;
    switch (type) {
        case IS_AUTHORIZED:
            return { ...state, isAuthorized: payload as boolean };
        case SET_USERS:
            return { ...state, users: [...state.users, ...(payload as UserType[])] };
        case IS_FETCHING:
            return { ...state, isFetching: payload as boolean };
        case RESET_CHOSEN_USER:
            return { ...state, chosenUser: null };
        case SET_CHOSEN_USER:
            return { ...state, chosenUser };
        case SET_LOCAL_LANGUAGE:
            return { ...state, localLanguage: (payload as Language) }
        case SET_CURRENT_PAGE_NUMBER:
            return {
                ...state,
                pageNumbers: { ...pageNumbers, current: pageNumbers.current + 1 },
            };
        case SET_PREVIOUS_PAGE_NUMBER:
            return {
                ...state,
                pageNumbers: { ...pageNumbers, previous: pageNumbers.current },
            };
        default:
            return state;
    }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
