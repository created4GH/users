import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  SET_USERS,
  FETCH_USERS,
  IS_FETCHING,
  SET_PREVIOUS_PAGE_NUMBER,
} from "../types";
import { UserType } from "../../interfaces";
import { fetchData, formatData } from "../../helpers";

interface Params {
  type: typeof FETCH_USERS;
  currentPage: number;
}

function* setUsers({ currentPage }: Params) {
  try {
    yield put({ type: IS_FETCHING, payload: true });
    const response: UserType[] = yield call(fetchData, currentPage);
    const formattedData = formatData(response);
    yield put({ type: SET_USERS, payload: formattedData });
  } catch (e) {
    console.log(e);
  } finally {
    yield put({ type: IS_FETCHING, payload: false });
    yield put({ type: SET_PREVIOUS_PAGE_NUMBER });
  }
}

export function* setUsersWatcher() {
  yield takeLatest(FETCH_USERS, setUsers);
}
