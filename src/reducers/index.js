import { combineReducers } from "redux";
import post from "./postReducer";
import university from "./universityReducer";
import postalCode from "./postalCodeReducer";

export default combineReducers({
  post,
  university,
  postalCode,
});
