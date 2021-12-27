import { all } from "redux-saga/effects";

import { fetchUsersWatcher } from "./sagas/fetchUsers";

export default function* rootSaga() {
  yield all([fetchUsersWatcher()]);
}
