import { combineReducers } from "redux";
import feedReducer from "./feed/feedReducer";
import postsReducer from "./PostsPage/postsReducer";

const reducer = combineReducers({
  feed: feedReducer,
  postsPage: postsReducer,
});

export default reducer;
