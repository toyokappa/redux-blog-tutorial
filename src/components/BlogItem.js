import React, { Component } from "react";

class BlogItem extends Component {
  render() {
    const { blogItem } = this.props;

    return (
      <>
        <h1>{blogItem.fields.title}</h1>
        <div>
          <span>作成日: {blogItem.sys.createdAt}</span>
          <span>更新日: {blogItem.sys.updatedAt}</span>
        </div>
        <div>{blogItem.fields.body}</div>
      </>
    );
  }
}

export default BlogItem;
