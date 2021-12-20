import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { SET_USERS, FETCH_USERS, IS_FETCHING } from "../types";
import { url } from "../../constants/url";
import { UsersType } from "../../interfaces";
import { convertDate } from "../../helpers";

const fetchData = async () => {
    const response = axios.get(url);
    const data = (await response).data;
    const results = data.results;
    return results;
}

function* setData() {
    try {
        yield put({ type: IS_FETCHING, payload: true });
        const response: UsersType[] = yield call(fetchData);
        const formattedData = response.map(item => {
            return {
                ...item,
                dob: {
                    ...item.dob,
                    date: convertDate(item.dob.date)
                },
                registered: {
                    ...item.registered,
                    date: convertDate(item.registered.date)
                }
            }
        });
        yield put({ type: SET_USERS, payload: formattedData });
    }
    catch (e) {
        console.log(e);
    }
    finally {
        yield put({ type: IS_FETCHING, payload: false })
    }
}

export function* setUsersWatcher() {
    yield takeLatest(FETCH_USERS, setData);
}