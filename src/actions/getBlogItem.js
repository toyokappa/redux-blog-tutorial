import { getEntry, getAsset } from "../apis/contentfulApi";

const requestBlogItem = () => {
  return {
    type: "REQUEST_BLOG_ITEM"
  };
};

const receiveBlogitem = blogItem => {
  return {
    type: "RECEIVE_BLOG_ITEM",
    payload: blogItem
  };
};

const getBlogItem = blogId => {
  return async dispatch => {
    dispatch(requestBlogItem);
    const entryRes = await getEntry(blogId);
    const eyeCatchId = entryRes.data.fields.eyeCatch.sys.id;
    const eyeCatchRes = await getAsset(eyeCatchId);
    const blogItem = {
      item: entryRes.data,
      eyeCatch: eyeCatchRes.data.fields.file.url
    };
    dispatch(receiveBlogitem(blogItem));
  };
};

export default getBlogItem;
