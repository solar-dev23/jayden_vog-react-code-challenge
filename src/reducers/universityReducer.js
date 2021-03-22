import * as types from "../actions/actionTypes";

export default function universityReducer(
  state = { isLoading: false },
  action = null,
) {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return { ...state, isLoading: true };
    case types.GET_COUNTRIES_SUCCESS:
      return { ...state, isLoading: false, countries: action.data };
    case types.GET_COUNTRIES_FAILED:
      return { ...state, isLoading: false, error: action.error };
    case types.GET_UNIVERSITIES:
      return { ...state, isLoading: true };
    case types.GET_UNIVERSITIES_SUCCESS:
      return { ...state, isLoading: false, list: action.data };
    case types.GET_UNIVERSITIES_FAILED:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
}
