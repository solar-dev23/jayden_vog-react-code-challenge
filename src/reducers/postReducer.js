import * as types from "../actions/actionTypes";

export default function postReducer(
  state = { isLoading: false },
  action = null,
) {
  switch (action.type) {
    case types.GET_POST_LIST:
      return { ...state, isLoading: true };
    case types.GET_POST_LIST_SUCCESS:
      return { ...state, isLoading: false, list: action.data };
    case types.GET_POST_LIST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.CREATE_POST:
      return { ...state, isLoading: true };
    case types.CREATE_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case types.CREATE_POST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.UPDATE_POST:
      return { ...state, isLoading: true };
    case types.UPDATE_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case types.UPDATE_POST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.DELETE_POST:
      return { ...state, isLoading: true };
    case types.DELETE_POST_SUCCESS:
      return { ...state, isLoading: false, data: action.data };
    case types.DELETE_POST_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
