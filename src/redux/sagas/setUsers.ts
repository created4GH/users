import { put, call, takeLatest } from "redux-saga/effects";

import { SET_USERS, FETCH_USERS, IS_FETCHING } from "../types";
import { UserType } from "../../interfaces";
import { fetchData, formatData } from "../../helpers";

function* fetchUsers() {
  try {
    yield put({ type: IS_FETCHING, payload: true });
    const response: UserType[] = yield call(fetchData);
    const formattedData = formatData(response);
    yield put({ type: SET_USERS, payload: formattedData });
  } catch (e) {
    console.log(e);
  } finally {
    yield put({ type: IS_FETCHING, payload: false });
  }
}

export function* fetchUsersWatcher() {
  yield takeLatest(FETCH_USERS, fetchUsers);
}
