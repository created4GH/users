
import { Action, InitialState, Language, UserType } from "../interfaces";
import {
  IS_AUTHORIZED,
  IS_FETCHING,
  SET_CHOSEN_USER,
  SET_USERS,
  RESET_CHOSEN_USER,
  SET_LOCAL_LANGUAGE,
  DID_FETCHING_FAIL,
} from "./types";


const initialState: InitialState = {
  users: [],
  isAuthorized: false,
  isFetching: false,
  selectedUser: null,
  areUsers: false,
  localLanguage: {
    value: "en-US",
    name: "ENGLISH",
  },
  didFetchingFail: false,
};

const rootReducer = (state: InitialState = initialState, { type, payload }: Action): InitialState => {
  switch (type) {
    case IS_AUTHORIZED:
      return { ...state, isAuthorized: payload as boolean };
    case SET_USERS:
      return { ...state, users: [...state.users, ...(payload as UserType[])], areUsers: true };
    case IS_FETCHING:
      return { ...state, isFetching: payload as boolean };
    case SET_CHOSEN_USER:
      return { ...state, selectedUser: payload as UserType };
    case RESET_CHOSEN_USER:
      return { ...state, selectedUser: null };
    case SET_LOCAL_LANGUAGE:
      return { ...state, localLanguage: payload as Language };
    case DID_FETCHING_FAIL:
      return { ...state, didFetchingFail: payload as boolean };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
