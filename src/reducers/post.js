import { handleActions } from "redux-actions";

import rootActions from "../actions";
import PostModel from "../models/Post";

const defaultState = {
  post: new PostModel(),
  error: null,
  isFetching: false
};

function getPostFromApi(post) {
  return new PostModel({
    id: post.sys.id,
    title: post.fields.title,
    body: post.fields.body,
    createdAt: post.sys.createdAt,
    updatedAt: post.sys.updatedAt
  });
}

function getEyeCatchFromApi(eyeCatch, post) {
  return post.set("eyeCatchUrl", eyeCatch.fields.file.url);
}

export default handleActions(
  {
    [rootActions.requestPost]: state => ({
      ...state,
      isFetching: true
    }),

    [rootActions.successPost]: (state, { payload }) => ({
      ...state,
      post: getPostFromApi(payload.post.data),
      error: null,
      isFetching: false
    }),

    [rootActions.failurePost]: (state, { payload }) => ({
      ...state,
      post: new PostModel(),
      error: payload,
      isFetching: false
    }),

    [rootActions.requestEyeCatch]: state => ({
      ...state,
      isFetching: true
    }),

    // XXX: 処理の実行順序(POST -> EYE_CATCH)が保証されない気がする
    [rootActions.successEyeCatch]: (state, { payload }) => ({
      ...state,
      post: getEyeCatchFromApi(payload.eyeCatch.data, state.post),
      error: null,
      isFetching: false
    }),

    [rootActions.failueEyeCatch]: (state, { payload }) => ({
      ...state,
      post: new PostModel(),
      error: payload,
      isFetching: false
    })
  },
  defaultState
);
