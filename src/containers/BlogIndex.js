import { connect } from "react-redux";

import BlogIndex from "../components/BlogIndex";

const mapStateToProps = state => {
  return {
    blogList: state.blogList
  };
};

export default connect(
  mapStateToProps,
  null
)(BlogIndex);
