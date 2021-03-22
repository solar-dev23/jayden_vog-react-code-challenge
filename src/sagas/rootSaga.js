import { all } from "redux-saga/effects";
import { postSaga } from "./postSaga";
import { universitySaga } from "./universitySaga";

export default function* rootSaga() {
  yield all([postSaga(), universitySaga()]);
}
