import { getEntries } from "../apis/contentfulApi";

const startRequest = () => {
  return {
    type: "START_REQUEST"
  };
};

const receiveData = data => {
  return {
    type: "RECEIVE_DATA",
    payload: data
  };
};

const getBlogList = () => {
  return dispatch => {
    dispatch(startRequest());
    getEntries().then(res => {
      const blogList = res.data.items;
      dispatch(receiveData(blogList));
    });
  };
};

export default getBlogList;
