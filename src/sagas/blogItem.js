import { call, fork, put, take } from "redux-saga/effects";

import { successBlogItem, failureBlogItem } from "../actions/getBlogItem";
import * as API from "../apis/contentfulApi";

function* handleRequestBlogItem() {
  while (true) {
    const action = yield take("REQUEST_BLOG_ITEM");
    const entryId = action.payload;
    const { payload, error } = yield call(API.getEntry, entryId);
    if (payload && !error) {
      yield put(successBlogItem(payload));
    } else {
      yield put(failureBlogItem(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestBlogItem);
}
