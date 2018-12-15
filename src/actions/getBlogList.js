import { getEntries } from "../apis/contentfulApi";

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getBlogList = () => {
  return dispatch => {
    getEntries().then(res => {
      const blogList = res.data.items;
      dispatch(receiveData(blogList));
    });
  };
};

export default getBlogList;
