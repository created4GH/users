import {
  IS_AUTHORIZED,
  FETCH_USERS,
  SET_CHOSEN_USER,
  RESET_CHOSEN_USER,
  SET_LOCAL_LANGUAGE,
  SET_IS_FIRST_FETCH,
} from "../types";

import { Language, UserType } from "../../interfaces";

export const setIsAuthorized = (payload: boolean) => {
  return {
    type: IS_AUTHORIZED,
    payload,
  };
};

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};

export const setselectedUser = (selectedUser: UserType) => {
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

export const setLocalLanguage = (payload: Language) => {
  return {
    type: SET_LOCAL_LANGUAGE,
    payload,
  };
};

export const setIsFirstFetch = (payload: boolean) => {
  return {
    type: SET_IS_FIRST_FETCH,
    payload,
  };
};
