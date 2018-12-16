const initialState = {
  isFetching: false,
  list: []
};

const blogList = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BLOG_LIST":
      return {
        isFetching: true
      };

    case "RECEIVE_BLOG_LIST":
      return {
        isFetching: false,
        list: action.payload
      };

    default:
      return state;
  }
};

export default blogList;
