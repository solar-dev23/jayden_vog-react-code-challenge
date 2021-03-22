import { all } from "redux-saga/effects";
import { postSaga } from "./postSaga";
import { universitySaga } from "./universitySaga";
import { postalCodeSaga } from "./postalCodeSaga";

export default function* rootSaga() {
  yield all([postSaga(), universitySaga(), postalCodeSaga()]);
}
