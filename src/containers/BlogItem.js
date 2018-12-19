import { connect } from "react-redux";

import BlogItem from "../components/pages/BlogItem";
import { requestBlogItem } from "../actions/getBlogItem";

const mapStateToProps = state => {
  return {
    item: state.blogItem.item,
    isFetching: state.blogItem.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBlogItem: entryId => {
      dispatch(requestBlogItem(entryId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogItem);
