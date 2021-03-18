import * as types from "./actionTypes";

export const getPosts = (query) => {
  return { type: types.GET_POST_LIST, query };
};

export const createPost = (post) => {
  return { type: types.CREATE_POST, post };
};

export const updatePost = (post) => {
  return { type: types.UPDATE_POST, post };
};
