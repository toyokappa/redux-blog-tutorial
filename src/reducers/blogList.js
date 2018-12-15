const initialState = [];

const blogList = (state = initialState, action) => {
  switch (action.type) {
    case "RECIEVE_DATA":
      return "data";
    default:
      return state;
  }
};

export default blogList;
