import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { POSTAL_ENDPOINT } from "../../constants/apiEndpoints";

function* lookupPostalCode(action) {
  try {
    const { code } = action;
    const data = yield axios
      .get(`${POSTAL_ENDPOINT}/${code}`)
      .then((response) => response.data);
    yield put({ type: types.LOOKUP_POSTAL_CODE_SUCCESS, data });
  } catch (error) {
    yield put({ type: types.LOOKUP_POSTAL_CODE_FAILED, error });
  }
}

export function* postalCodeSaga() {
  yield takeLatest(types.LOOKUP_POSTAL_CODE, lookupPostalCode);
}
