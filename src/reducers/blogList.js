const initialState = {
  isFetching: false,
  list: [],
  error: {}
};

const blogList = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BLOG_LIST":
      return {
        ...state,
        isFetching: true
      };

    case "SUCCESS_BLOG_LIST":
      return {
        ...state,
        isFetching: false,
        list: action.payload.data.items
      };

    case "FAILURE_BLOG_LIST":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default blogList;
