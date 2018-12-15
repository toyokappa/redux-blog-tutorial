import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./components/App";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
