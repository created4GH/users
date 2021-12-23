import { put, call, takeLeading } from "redux-saga/effects";

import { UserType } from "../../interfaces";
import { createURLQuery, fetchData, formatData } from "../../helpers";
import { SET_USERS, FETCH_USERS, IS_FETCHING } from "../types";
import { URL } from "../../constants/url";

interface Params {
  type: typeof FETCH_USERS;
  query: number;
}

function* fetchUsers({ query }: Params) {
  const url = createURLQuery(URL, query);
  try {
    yield put({ type: IS_FETCHING, isFetching: true });
    const response: UserType[] = yield call(fetchData, url);
    const formattedData = formatData(response);
    yield put({ type: SET_USERS, users: formattedData });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchUsersWatcher() {
  yield takeLeading(FETCH_USERS, fetchUsers);
}
