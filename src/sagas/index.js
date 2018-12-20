import { fork } from "redux-saga/effects";

import blogSaga from "./blog";
import blogItemSage from "./blogItem";

export default function* rootSaga() {
  yield fork(blogSaga);
  yield fork(blogItemSage);
}
