import {
  IS_AUTHORIZED,
  FETCH_USERS,
  SET_CHOSEN_USER,
  RESET_CHOSEN_USER,
  SET_LOCAL_LANGUAGE,
} from "../types";

import { Language, UserType } from "../../interfaces";

export const setIsAuthorized = (payload: boolean) => {
  return {
    type: IS_AUTHORIZED,
    payload,
  };
};

export const fetchUsers = (query: number) => {
  return {
    type: FETCH_USERS,
    query
  };
};

export const setSelectedUser = (payload: UserType) => {
  return {
    type: SET_CHOSEN_USER,
    payload,
  };
};

export const resetSelectedUser = () => {
  return {
    type: RESET_CHOSEN_USER,
  };
};

export const setLocalLanguage = (payload: Language) => {
  return {
    type: SET_LOCAL_LANGUAGE,
    payload,
  };
};
