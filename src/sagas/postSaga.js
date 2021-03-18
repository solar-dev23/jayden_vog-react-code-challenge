import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import * as types from "../actions/actionTypes";
import { POST_ENDPOINT } from "../constants/apiEndpoints";

function* createPost(action) {
  try {
    const { post } = action;
    const data = yield axios
      .post(`${POST_ENDPOINT}`, post)
      .then((response) => response.data);
    yield put({
      type: types.CREATE_POST_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({ type: types.CREATE_POST_FAILED, error });
  }
}

function* updatePost(action) {
  try {
    const { post, id } = action;
    const data = yield axios
      .patch(`${POST_ENDPOINT}/${id}`, post)
      .then((response) => response.data);
    yield put({
      type: types.UPDATE_POST_SUCCESS,
      data: data,
    });
  } catch (error) {
    yield put({ type: types.UPDATE_POST_FAILED, error });
  }
}

function* fetchPosts(action) {
  try {
    const { query } = action;
    const data = yield axios
      .get(`${POST_ENDPOINT}/${query}`)
      .then((response) => response.data);
    yield put({ type: types.GET_POST_LIST_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: types.GET_POST_LIST_FAILED, error });
  }
}

export function* postSaga() {
  yield all([
    takeLatest(types.GET_POST_LIST, fetchPosts),
    takeLatest(types.CREATE_POST, createPost),
    takeLatest(types.UPDATE_POST, updatePost),
  ]);
}
