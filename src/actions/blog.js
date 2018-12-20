export function requestBlog() {
  return {
    type: "REQUEST_BLOG"
  };
}

export function successBlog(payload) {
  return {
    type: "SUCCESS_BLOG",
    payload: payload
  };
}

export function failureBlog(error) {
  return {
    type: "FAILURE_BLOG",
    error: error
  };
}
