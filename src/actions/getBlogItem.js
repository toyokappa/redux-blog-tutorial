export function requestBlogItem(entryId) {
  return {
    type: "REQUEST_BLOG_ITEM",
    payload: entryId
  };
}

export function successBlogItem(payload) {
  return {
    type: "SUCCESS_BLOG_ITEM",
    payload: payload
  };
}

export function failureBlogItem(error) {
  return {
    type: "FAILURE_BLOG_ITEM",
    error: error
  };
}
