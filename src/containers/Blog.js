import { connect } from "react-redux";

import Blog from "../components/pages/Blog";
import { requestBlog } from "../actions/blog";

const mapStateToProps = state => {
  return {
    blog: state.blogReducer.blog,
    error: state.blogReducer.error,
    isFetching: state.blogReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBlog: () => {
      dispatch(requestBlog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
