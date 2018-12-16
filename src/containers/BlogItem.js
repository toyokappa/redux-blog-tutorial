import { connect } from "react-redux";

import BlogItem from "../components/BlogItem";

const mapStateToProps = (state, ownProps) => {
  const blogItem = state.blogList.list.find(item => {
    return item.sys.id === ownProps.match.params.id;
  });

  return {
    blogItem: blogItem
  };
};

export default connect(
  mapStateToProps,
  null
)(BlogItem);
