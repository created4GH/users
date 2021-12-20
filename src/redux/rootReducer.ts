import { UsersType } from "../interfaces";
import { IS_AUTHORIZED, IS_FETCHING, SET_USERS } from "./types";

interface InitialState {
    users: UsersType[];
    isAuthorized: boolean;
    isFetching: boolean;
}

interface Action {
    type: string;
    payload: string | boolean | UsersType[];
}

const initialState: InitialState = {
    users: [],
    isAuthorized: false,
    isFetching: false,
}

const rootReducer = (state: InitialState = initialState, { type, payload }: Action): InitialState => {
    switch (type) {
        case IS_AUTHORIZED:
            return { ...state, isAuthorized: (payload as boolean) };
        case SET_USERS:
            return { ...state, users: (payload as UsersType[]) };
        case IS_FETCHING:
            return { ...state, isFetching: (payload as boolean) }
        default:
            return state;
    }
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;