import { call, fork, put, take } from "redux-saga/effects";

import rootActions from "../actions";
import * as API from "../apis/contentfulApi";

function* handleRequestBlog() {
  while (true) {
    yield take("REQUEST_BLOG");
    const { payload, error } = yield call(API.getEntries);
    if (payload && !error) {
      yield put(rootActions.successBlog(payload));
    } else {
      yield put(rootActions.failureBlog(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestBlog);
}
