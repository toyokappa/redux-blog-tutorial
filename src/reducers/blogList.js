const initialState = [];

const blogList = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_DATA":
      return action.payload;
    default:
      return state;
  }
};

export default blogList;
