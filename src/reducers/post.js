import PostModel from "../models/Post";

const initialState = {
  post: new PostModel(),
  error: null,
  isFetching: false
};

function getPostFromApi(post) {
  return new PostModel({
    id: post.sys.id,
    title: post.fields.title,
    body: post.fields.body,
    createdAt: post.sys.createdAt,
    updatedAt: post.sys.updatedAt
  });
}

const post = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_POST":
      return {
        ...state,
        isFetching: true
      };

    case "SUCCESS_POST":
      return {
        ...state,
        post: getPostFromApi(action.payload.data),
        isFetching: false
      };

    case "FAILURE_POST":
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};

export default post;
