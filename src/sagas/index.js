import { fork } from "redux-saga/effects";

import blogSaga from "./blog";
import postSage from "./post";

export default function* rootSaga() {
  yield fork(blogSaga);
  yield fork(postSage);
}
