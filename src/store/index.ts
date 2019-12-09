import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunkMiddleware from "redux-thunk";

import createRootReducer from "../reducers";

const history = createBrowserHistory();

const configureStore = (preloadedState: any): any => (
  createStore(
    createRootReducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunkMiddleware)),
  )
);

export default configureStore;
