import { combineReducers } from "redux";
import mainReducre from "./Reducer";

const rootReducer = combineReducers({
  tableValues: mainReducre,
});

export default rootReducer;
