import { RootState } from "../rootReducer";

export const stateSelector = (state: RootState) => state;
export const IsAuthorizedSelector = (state: RootState) => state.isAuthorized;
export const usersSelector = (state: RootState) => state.users;
export const isFetchingSelector = (state: RootState) => state.isFetching;
export const selectedUserSelector = (state: RootState) => state.selectedUser;
export const isFirstFetchSelector = (state: RootState) => state.isFirstFetch;
export const localLanguageSelector = (state: RootState) => state.localLanguage;
