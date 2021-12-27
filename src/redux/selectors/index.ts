import { RootState } from "../rootReducer";

export const stateSelector = (state: RootState) => state;
export const isAuthorizedSelector = (state: RootState) => state.isAuthorized;
export const usersSelector = (state: RootState) => state.users;
export const isFetchingSelector = (state: RootState) => state.isFetching;
export const isFetchingErrorSelector = (state: RootState) => state.isFetchingFail;
export const selectedUserSelector = (state: RootState) => state.selectedUser;
export const isUsersSelector = (state: RootState) => state.isUsers;
export const localLanguageSelector = (state: RootState) => state.localLanguage;
export const setFetchingFailSelector = (state: RootState) => state.localLanguage;
