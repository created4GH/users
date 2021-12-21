import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  SET_USERS,
  FETCH_USERS,
  IS_FETCHING,
  SET_PREVIOUS_PAGE_NUMBER,
} from "../types";
import { url } from "../../constants/url";
import { UserType } from "../../interfaces";
import { convertDate } from "../../helpers";

const fetchData = async (pageNumber: number) => {
  const response = axios.get(url(pageNumber));
  const data = (await response).data;
  const results = data.results;
  return results;
};

interface Params {
  type: typeof FETCH_USERS;
  currentPage: number;
}

function* setUsers({ currentPage }: Params) {
  try {
    yield put({ type: IS_FETCHING, payload: true });
    const response: UserType[] = yield call(fetchData, currentPage);
    const formattedData = response.map((item) => {
      const genderColor = item.gender === "male" ? "blue" : "pink";
      const className = "user-item " + genderColor;
      return {
        ...item,
        dob: {
          ...item.dob,
          date: convertDate(item.dob.date),
        },
        registered: {
          ...item.registered,
          date: convertDate(item.registered.date),
        },
        className,
      };
    });
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
