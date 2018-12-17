import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseLayout from "../templates/BaseLayout";

class BlogIndex extends Component {
  componentDidMount() {
    const { getBlogList } = this.props;
    getBlogList();
  }

  render() {
    const { isFetching, list } = this.props.blogList;
    if (isFetching) return <p>Loading...</p>;

    const blogIndex = list.map(blogItem => {
      return (
        <li key={blogItem.sys.id}>
          <Link to={`/${blogItem.sys.id}`}>{blogItem.fields.title}</Link>
        </li>
      );
    });
    return (
      <BaseLayout>
        <ul>{blogIndex}</ul>
      </BaseLayout>
    );
  }
}

export default BlogIndex;