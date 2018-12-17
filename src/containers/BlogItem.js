import { connect } from "react-redux";

import BlogItem from "../components/pages/BlogItem";
import getBlogItem from "../actions/getBlogItem";

const mapStateToProps = state => {
  return {
    blogItem: state.blogItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBlogItem: blogId => {
      dispatch(getBlogItem(blogId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItem);
