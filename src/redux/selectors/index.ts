import { RootState } from "../rootReducer";

export const stateSelector = (state: RootState) => state;
export const isAuthorizedSelector = (state: RootState) => state.isAuthorized;
export const usersSelector = (state: RootState) => state.users;
export const isFetchingSelector = (state: RootState) => state.isFetching;
export const didFetchingFailSelector = (state: RootState) => state.didFetchingFail;
export const selectedUserSelector = (state: RootState) => state.selectedUser;
export const areUsersSelector = (state: RootState) => state.areUsers;
export const localLanguageSelector = (state: RootState) => state.localLanguage;
export const setFetchingFailSelector = (state: RootState) => state.localLanguage;
