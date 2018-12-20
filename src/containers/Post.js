import { connect } from "react-redux";

import rootActions from "../actions";
import Post from "../components/pages/Post";

const mapStateToProps = state => {
  return {
    post: state.postReducer.post,
    isFetching: state.postReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPost: postId => {
      dispatch(rootActions.requestPost(postId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
