import { put, call, takeLeading } from "redux-saga/effects";

import { UserType } from "../../interfaces";
import { createURLQuery, fetchData, formatData } from "../../helpers";
import { SET_USERS, FETCH_USERS, IS_FETCHING, DID_FETCHING_FAIL } from "../types";
import { URL } from "../../constants/url";

interface Params {
  type: typeof FETCH_USERS;
  query: number;
}

function* fetchUsers({ query }: Params) {
  const url = createURLQuery(URL, query);
  try {
    yield put({ type: DID_FETCHING_FAIL, payload: false });
    yield put({ type: IS_FETCHING, payload: true });
    const response: UserType[] = yield call(fetchData, url);
    const formattedData = formatData(response);
    yield put({ type: SET_USERS, payload: formattedData });
  } catch (e) {
    yield put({ type: DID_FETCHING_FAIL, payload: true });
  }
  finally {
    yield put({ type: IS_FETCHING, payload: false });
  }
}

export function* fetchUsersWatcher() {
  yield takeLeading(FETCH_USERS, fetchUsers);
}
