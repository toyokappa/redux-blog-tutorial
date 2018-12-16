import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

import Router from "./components/Router";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(rootReducer(history), applyMiddleware(...middlewares));

render(
  <Provider store={store}>
    <Router history={history} />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
