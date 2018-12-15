import React, { Component } from "react";

class BlogIndex extends Component {
  componentDidMount() {
    const { getBlogList } = this.props;
    getBlogList();
  }

  render() {
    const { blogList } = this.props;
    const blogIndex = blogList.map(blogItem => {
      return <li key={blogItem.sys.id}>{blogItem.fields.title}</li>;
    });
    return <ul>{blogIndex}</ul>;
  }
}

export default BlogIndex;
