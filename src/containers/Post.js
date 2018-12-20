import { connect } from "react-redux";

import Post from "../components/pages/Post";
import { requestPost } from "../actions/post";

const mapStateToProps = state => {
  return {
    post: state.postReducer.post,
    isFetching: state.postReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPost: postId => {
      dispatch(requestPost(postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
