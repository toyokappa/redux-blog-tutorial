import { call, fork, put, take } from "redux-saga/effects";

import { successBlogList, failureBlogList } from "../actions/getBlogList";
import * as API from "../apis/contentfulApi";

function* handleRequestBlogList() {
  while (true) {
    yield take("REQUEST_BLOG_LIST");
    const { payload, error } = yield call(API.getEntries);
    if (payload && !error) {
      yield put(successBlogList(payload));
    } else {
      yield put(failureBlogList(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestBlogList);
}
