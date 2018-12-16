const initialState = {
  isFetching: true,
  item: {}
};

const blogItem = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BLOG_ITEM":
      return {
        isFetching: true
      };

    case "RECEIVE_BLOG_ITEM":
      return {
        isFetching: false,
        item: action.payload.item,
        eyeCatch: action.payload.eyeCatch
      };

    default:
      return state;
  }
};

export default blogItem;
