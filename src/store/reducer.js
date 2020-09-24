import { combineReducers } from "redux";
import feedReducer from "./feed/feedReducer";

const reducer = combineReducers({
  feed: feedReducer,
});

export default reducer;
