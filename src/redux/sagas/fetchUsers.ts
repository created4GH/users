import { put, call, takeLeading } from "redux-saga/effects";

import { UserType } from "../../interfaces";
import { createURLQuery, fetchData, formatData } from "../../helpers";
import { SET_USERS, FETCH_USERS, IS_FETCHING, SET_IS_FETCHING_FAIL, SET_IS_FIRST_FETCH } from "../types";
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
    yield put({type: SET_IS_FETCHING_FAIL, isFetchingFail: true})
  }
  finally{
    yield put({ type: IS_FETCHING, isFetching: false});
    yield put({ type: SET_IS_FIRST_FETCH, isFirstFetch: false});
    yield put({ type: SET_IS_FETCHING_FAIL, isFetchingFail: false});
  }
}

export function* fetchUsersWatcher() {
  yield takeLeading(FETCH_USERS, fetchUsers);
}
