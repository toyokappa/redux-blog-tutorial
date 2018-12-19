import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import BaseLayout from "../templates/BaseLayout";
import { Markdown } from "../atoms/Common";

class BlogItem extends Component {
  componentDidMount() {
    const { requestBlogItem } = this.props;
    const { id } = this.props.match.params;
    requestBlogItem(id);
  }

  render() {
    const { isFetching, item } = this.props;
    if (isFetching) return <p>Loading...</p>;

    return (
      <BaseLayout>
        <Link to="/">戻る</Link>
        <h1>{item.fields.title}</h1>
        <div>
          <span>作成日: {moment(item.sys.createdAt).format("YYYY.MM.DD HH:mm")}</span>
          <span>更新日: {moment(item.sys.updatedAt).format("YYYY.MM.DD HH:mm")}</span>
        </div>
        <Markdown body={item.fields.body} />
      </BaseLayout>
    );
  }
}

export default BlogItem;
