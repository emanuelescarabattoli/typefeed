import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as formReducer } from "redux-form";

import resourceList from "./resourceList";

// Here we combine all reducers to create a root reducer for redux
export default (history: any): any => (
  combineReducers(
    {
      router: connectRouter(history),
      form: formReducer,
      listFeeds: resourceList("FEEDS"),
    },
  )
);
