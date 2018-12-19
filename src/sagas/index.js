import { fork } from "redux-saga/effects";

import blogListSaga from "./blogList";

export default function* rootSaga() {
  yield fork(blogListSaga);
}
