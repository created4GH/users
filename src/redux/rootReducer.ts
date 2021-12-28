
import { Action, InitialState } from "../interfaces";
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

const rootReducer = (
  state: InitialState = initialState,
  { type, users, isAuthorized, selectedUser, areUsers, localLanguage, isFetching, didFetchingFail }: Action
): InitialState => {
  switch (type) {
    case IS_AUTHORIZED:
      return { ...state, isAuthorized };
    case SET_USERS:
      return { ...state, users: [...state.users, ...users], areUsers: true };
    case IS_FETCHING:
      return { ...state, isFetching };
    case SET_CHOSEN_USER:
      return { ...state, selectedUser };
    case RESET_CHOSEN_USER:
      return { ...state, selectedUser: null };
    case SET_LOCAL_LANGUAGE:
      return { ...state, localLanguage };
    case DID_FETCHING_FAIL:
      return { ...state, didFetchingFail };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
