import * as types from "./actionTypes";

export const lookupPostalCode = (code) => {
  return { type: types.LOOKUP_POSTAL_CODE, code };
};
