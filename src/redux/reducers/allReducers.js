import { combineReducers } from "redux";
import emptyReducer from "./emptyReducer";

const allReducers = combineReducers({
  emptyReducer: emptyReducer
});

export default allReducers;
