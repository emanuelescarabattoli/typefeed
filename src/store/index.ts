import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";

import createRootReducer from "../reducers";

// Creating an history to allow user browse through the pages
const history = createBrowserHistory();

// Here we create the store, createRootReducer creates the root reducer
// used by redux to manage the state of the application.
const configureStore = (preloadedState: any) => (
  createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware)),
  )
);

export default configureStore;
