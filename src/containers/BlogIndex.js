import { connect } from "react-redux";

import BlogIndex from "../components/pages/BlogIndex";
import { requestBlogList } from "../actions/getBlogList";

const mapStateToProps = state => {
  return {
    list: state.blogList.list,
    error: state.blogList.error,
    isFetching: state.blogList.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBlogList: () => {
      dispatch(requestBlogList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogIndex);
