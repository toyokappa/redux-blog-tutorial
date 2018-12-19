import { fork } from "redux-saga/effects";

import blogListSaga from "./blogList";
import blogItemSage from "./blogItem";

export default function* rootSaga() {
  yield fork(blogListSaga);
  yield fork(blogItemSage);
}
