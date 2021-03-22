import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import {
  UNIVERSITY_ENDPOINT,
  COUNTRY_ENDPOINT,
} from "../constants/apiEndpoints";

function* fetchCountries() {
  try {
    const data = yield axios
      .get(`${COUNTRY_ENDPOINT}`)
      .then((response) => response.data);
    yield put({ type: types.GET_COUNTRIES_SUCCESS, data: data.data });
  } catch (error) {
    yield put({ type: types.GET_COUNTRIES_FAILED, error });
  }
}

function* fetchUniversities(action) {
  try {
    const { country } = action;
    const data = yield axios
      .get(`${UNIVERSITY_ENDPOINT}/search?country=${country}`)
      .then((response) => response.data);
    yield put({ type: types.GET_UNIVERSITIES_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: types.GET_UNIVERSITIES_FAILED, error });
  }
}

export function* universitySaga() {
  yield all([
    takeLatest(types.GET_COUNTRIES, fetchCountries),
    takeLatest(types.GET_UNIVERSITIES, fetchUniversities),
  ]);
}
