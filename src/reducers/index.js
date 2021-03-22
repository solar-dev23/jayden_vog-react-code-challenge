import { combineReducers } from "redux";
import post from "./postReducer";
import university from "./universityReducer";

export default combineReducers({
  post,
  university,
});
