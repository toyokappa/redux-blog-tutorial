import { connect } from "react-redux";

import BlogIndex from "../components/BlogIndex";
import getBlogList from "../actions/getBlogList";

const mapStateToProps = state => {
  return {
    blogList: state.blogList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogList: () => {
      dispatch(getBlogList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogIndex);
