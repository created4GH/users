import { all } from "redux-saga/effects";

import { fetchUsersWatcher } from "./sagas/setUsers";

export default function* rootSaga() {
  yield all([fetchUsersWatcher()]);
}
