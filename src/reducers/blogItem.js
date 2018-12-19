const initialItem = {
  fields: {
    title: "",
    body: ""
  },
  sys: {
    createdAt: null,
    updatedAt: null
  }
};
const initialState = {
  isFetching: false,
  item: initialItem,
  error: {}
};

const blogItem = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BLOG_ITEM":
      return {
        ...state,
        isFetching: true
      };

    case "SUCCESS_BLOG_ITEM":
      return {
        ...state,
        isFetching: false,
        item: action.payload.data
      };

    case "FAILURE_BLOG_ITEM":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default blogItem;
