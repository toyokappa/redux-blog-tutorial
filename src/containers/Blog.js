import { connect } from "react-redux";

import rootActions from "../actions";
import Blog from "../components/pages/Blog";

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
      dispatch(rootActions.requestBlog());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
