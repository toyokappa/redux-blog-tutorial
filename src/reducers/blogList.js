const initialState = {
  isFetching: false,
  list: []
};

const blogList = (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return {
        isFetching: true
      };

    case "RECEIVE_DATA":
      return {
        isFetching: false,
        list: action.payload
      };

    default:
      return state;
  }
};

export default blogList;
