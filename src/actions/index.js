import { createActions } from "redux-actions";

export default createActions({
  // ブログ記事一覧
  REQUEST_BLOG: payload => ({ payload }),
  SUCCESS_BLOG: blog => ({ blog }),
  FAILURE_BLOG: error => ({ error }),

  // ブログ記事
  REQUEST_POST: postId => ({ postId }),
  SUCCESS_POST: post => ({ post }),
  FAILURE_POST: error => ({ error }),

  // ブログアイキャッチ
  REQUEST_EYE_CATCH: assetId => ({ assetId }),
  SUCCESS_EYE_CATCH: eyeCatch => ({ eyeCatch }),
  FAILURE_EYE_CATCH: error => ({ error })
});
