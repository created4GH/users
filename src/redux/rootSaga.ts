import { all } from 'redux-saga/effects';

import { setUsersWatcher } from "./sagas/setUsers";

export default function* rootSaga() {
    yield all([setUsersWatcher()
    ]);
}