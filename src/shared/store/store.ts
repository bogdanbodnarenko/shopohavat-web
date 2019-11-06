import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";

import * as reducers from "./reducers";

export const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    ...reducers
  }),
  process.env.REACT_APP_PROD === "true"
    ? applyMiddleware(routerMiddleware(history), thunk)
    : composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
