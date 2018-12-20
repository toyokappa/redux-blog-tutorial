import React, { Component } from "react";
import { Link } from "react-router-dom";

import BaseLayout from "../templates/BaseLayout";

class Blog extends Component {
  componentDidMount() {
    const { requestBlog } = this.props;
    requestBlog();
  }

  render() {
    const { blog, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;

    const blogIndex = blog.posts.size
      ? blog.posts.valueSeq().map(post => {
          return (
            <li key={post.id}>
              <Link to={`/${post.id}`}>{post.title}</Link>
            </li>
          );
        })
      : null;

    return (
      <BaseLayout>
        <ul>{blogIndex}</ul>
      </BaseLayout>
    );
  }
}

export default Blog;
