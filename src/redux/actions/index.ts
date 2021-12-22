import {
  IS_AUTHORIZED,
  SET_CURRENT_PAGE_NUMBER,
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

export const setChosenUser = (chosenUser: UserType) => {
  return {
    type: SET_CHOSEN_USER,
    chosenUser,
  };
};

export const fetchUsers = (currentPage: number) => {
  return {
    type: FETCH_USERS,
    currentPage,
  };
};

export const setPageNumber = () => {
  return {
    type: SET_CURRENT_PAGE_NUMBER,
  };
};

export const resetChosenUser = () => {
  return {
    type: RESET_CHOSEN_USER
  }
}

export const setLocalLanguage = (payload: Language) => {
  return {
    type: SET_LOCAL_LANGUAGE,
    payload
  }
}