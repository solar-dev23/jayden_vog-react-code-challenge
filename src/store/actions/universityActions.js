import * as types from "./actionTypes";

export const getCountries = () => {
  return { type: types.GET_COUNTRIES };
};

export const getUniversities = (country) => {
  return { type: types.GET_UNIVERSITIES, country };
};
