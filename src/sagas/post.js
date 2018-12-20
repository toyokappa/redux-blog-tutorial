import { call, fork, put, take } from "redux-saga/effects";

import { successPost, failurePost } from "../actions/post";
import * as API from "../apis/contentfulApi";

function* handleRequestPost() {
  while (true) {
    const action = yield take("REQUEST_POST");
    const postId = action.payload;
    const { payload, error } = yield call(API.getEntry, postId);
    if (payload && !error) {
      yield put(successPost(payload));
    } else {
      yield put(failurePost(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRequestPost);
}
