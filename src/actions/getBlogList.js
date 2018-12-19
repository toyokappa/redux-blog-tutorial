export function requestBlogList() {
  return {
    type: "REQUEST_BLOG_LIST"
  };
}

export function successBlogList(payload) {
  return {
    type: "SUCCESS_BLOG_LIST",
    payload: payload
  };
}

export function failureBlogList(error) {
  return {
    type: "FAILURE_BLOG_LIST",
    error: error
  };
}
