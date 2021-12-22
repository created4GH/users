import { Language, UserType } from "../interfaces";
import {
  IS_AUTHORIZED,
  IS_FETCHING,
  SET_CHOSEN_USER,
  SET_USERS,
  SET_IS_FIRST_FETCH,
  RESET_CHOSEN_USER,
  SET_LOCAL_LANGUAGE,
} from "./types";

interface InitialState {
  users: UserType[];
  isAuthorized: boolean;
  isFetching: boolean;
  selectedUser: UserType | null;
  isFirstFetch: boolean;
  localLanguage: {
    value: string;
    name: string;
  };
}

interface Action {
  type: string;
  payload: string | boolean | UserType[] | Language;
  selectedUser: UserType;
}

const initialState: InitialState = {
  users: [],
  isAuthorized:
    sessionStorage.getItem("is_Authorized") === "false" ? false : true,
  isFetching: false,
  selectedUser: null,
  isFirstFetch: true,
  localLanguage: JSON.parse(localStorage.getItem("intl-language")!) || {
    value: "en-US",
    name: "ENGLISH",
  },
};

const rootReducer = (
  state: InitialState = initialState,
  { type, payload, selectedUser }: Action
): InitialState => {
  switch (type) {
    case IS_AUTHORIZED:
      return { ...state, isAuthorized: payload as boolean };
    case SET_USERS:
      return { ...state, users: [...state.users, ...(payload as UserType[])] };
    case IS_FETCHING:
      return { ...state, isFetching: payload as boolean };
    case SET_IS_FIRST_FETCH:
      return { ...state, isFirstFetch: payload as boolean };
    case SET_CHOSEN_USER:
      return { ...state, selectedUser };
    case RESET_CHOSEN_USER:
      return { ...state, selectedUser: null };
    case SET_LOCAL_LANGUAGE:
      return { ...state, localLanguage: payload as Language };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
