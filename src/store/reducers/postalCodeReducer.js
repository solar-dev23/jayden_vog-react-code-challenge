import * as types from "../actions/actionTypes";

export default function postalCodeReducer(
  state = { isLoading: false },
  action = null,
) {
  switch (action.type) {
    case types.LOOKUP_POSTAL_CODE:
      return { ...state, isLoading: true };
    case types.LOOKUP_POSTAL_CODE_SUCCESS:
      return { ...state, isLoading: false, data: action.data, error: null };
    case types.LOOKUP_POSTAL_CODE_FAILED:
      return { ...state, isLoading: false, data: null, error: action.error };
    default:
      return state;
  }
}
