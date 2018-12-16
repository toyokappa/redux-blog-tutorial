import React, { Component } from "react";
import moment from "moment";

import Markdown from "./Markdown";

class BlogItem extends Component {
  render() {
    const { blogItem } = this.props;

    return (
      <>
        <h1>{blogItem.fields.title}</h1>
        <div>
          <span>作成日: {moment(blogItem.sys.createdAt).format("YYYY.MM.DD HH:mm")}</span>
          <span>更新日: {moment(blogItem.sys.updatedAt).format("YYYY.MM.DD HH:mm")}</span>
        </div>
        <Markdown body={blogItem.fields.body} />
      </>
    );
  }
}

export default BlogItem;
