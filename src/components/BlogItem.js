import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import Markdown from "./Markdown";

class BlogItem extends Component {
  componentDidMount() {
    const { getBlogItem } = this.props;
    const { id } = this.props.match.params;
    getBlogItem(id);
  }

  render() {
    const { isFetching, item, eyeCatch } = this.props.blogItem;
    if (isFetching) return <p>Loading...</p>;

    return (
      <>
        <Link to="/">戻る</Link>
        <h1>{item.fields.title}</h1>
        <img src={eyeCatch} alt="eye_catch" />
        <div>
          <span>作成日: {moment(item.sys.createdAt).format("YYYY.MM.DD HH:mm")}</span>
          <span>更新日: {moment(item.sys.updatedAt).format("YYYY.MM.DD HH:mm")}</span>
        </div>
        <Markdown body={item.fields.body} />
      </>
    );
  }
}

export default BlogItem;
