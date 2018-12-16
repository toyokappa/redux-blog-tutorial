import { getEntries } from "../apis/contentfulApi";

const requestBlogList = () => {
  return {
    type: "REQUEST_BLOG_LIST"
  };
};

const recieveBlogList = blogList => {
  return {
    type: "RECEIVE_BLOG_LIST",
    payload: blogList
  };
};

const getBlogList = () => {
  return dispatch => {
    dispatch(requestBlogList());
    getEntries().then(res => {
      const blogList = res.data.items;
      dispatch(recieveBlogList(blogList));
    });
  };
};

export default getBlogList;
