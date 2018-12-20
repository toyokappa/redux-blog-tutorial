import { OrderedMap } from "immutable";

import BlogModel from "../models/Blog";
import PostModel from "../models/Post";

const initialState = {
  blog: new BlogModel(),
  error: null,
  isFetching: false
};

function getPostsFromApi(posts) {
  const postModels = posts.map(
    post =>
      new PostModel({
        id: post.sys.id,
        title: post.fields.title,
        body: post.fields.body,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt
      })
  );

  const postsMap = postModels.reduce((map, post) => map.set(post.createdAt, post), OrderedMap());
  return postsMap;
}

const blog = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_BLOG":
      return {
        ...state,
        isFetching: true
      };

    case "SUCCESS_BLOG":
      return {
        ...state,
        blog: new BlogModel({ posts: getPostsFromApi(action.payload.data.items) }),
        error: null,
        isFetching: false
      };

    case "FAILURE_BLOG":
      return {
        ...state,
        blog: new BlogModel(),
        error: action.error,
        isFetching: false
      };

    default:
      return state;
  }
};

export default blog;
