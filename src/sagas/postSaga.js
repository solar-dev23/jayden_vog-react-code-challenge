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
    const { post } = action;
    const data = yield axios
      .patch(`${POST_ENDPOINT}/${post.id}`, post)
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

function* deletePost(action) {
  try {
    const { postId } = action;
    yield axios
      .delete(`${POST_ENDPOINT}/${postId}`)
      .then((response) => response.data);
    yield put({ type: types.DELETE_POST_SUCCESS, data: "Success" });
  } catch (error) {
    yield put({ type: types.DELETE_POST_FAILED, error });
  }
}

export function* postSaga() {
  yield all([
    takeLatest(types.GET_POST_LIST, fetchPosts),
    takeLatest(types.CREATE_POST, createPost),
    takeLatest(types.UPDATE_POST, updatePost),
    takeLatest(types.DELETE_POST, deletePost),
  ]);
}
