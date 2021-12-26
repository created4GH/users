import {
  IS_AUTHORIZED,
  FETCH_USERS,
  SET_CHOSEN_USER,
  RESET_CHOSEN_USER,
  SET_LOCAL_LANGUAGE,
  SET_IS_FIRST_FETCH,
  SET_IS_SECOND_FETCH,
} from "../types";

import { Language, UserType } from "../../interfaces";

export const setIsAuthorized = (isAuthorized: boolean) => {
  return {
    type: IS_AUTHORIZED,
    isAuthorized,
  };
};

export const fetchUsers = (query: number) => {
  return {
    type: FETCH_USERS,
    query
  };
};

export const setSelectedUser = (selectedUser: UserType) => {
  return {
    type: SET_CHOSEN_USER,
    selectedUser,
  };
};

export const resetSelectedUser = () => {
  return {
    type: RESET_CHOSEN_USER,
  };
};

export const setLocalLanguage = (localLanguage: Language) => {
  return {
    type: SET_LOCAL_LANGUAGE,
    localLanguage,
  };
};
