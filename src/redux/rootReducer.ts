import { UserType } from "../interfaces";
import { IS_AUTHORIZED, IS_FETCHING, SET_CHOSEN_USER, SET_USERS } from "./types";

interface InitialState {
    users: UserType[];
    isAuthorized: boolean;
    isFetching: boolean;
    chosenUser: UserType | null;
    usersPageNumber: number;
}

interface Action {
    type: string;
    payload: string | boolean | UserType[];
    chosenUser: UserType;
}

const initialState: InitialState = {
    users: [],
    isAuthorized: false,
    isFetching: false,
    chosenUser: null,
    usersPageNumber: 0,
}

const rootReducer = (state: InitialState = initialState, { type, payload, chosenUser }: Action): InitialState => {
    switch (type) {
        case IS_AUTHORIZED:
            return { ...state, isAuthorized: (payload as boolean) };
        case SET_USERS:
            return { ...state, users: [...state.users, ...(payload as UserType[])] };
        case IS_FETCHING:
            return { ...state, isFetching: (payload as boolean) }
        case SET_CHOSEN_USER:
            return { ...state, chosenUser }
        default:
            return state;
    }
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;