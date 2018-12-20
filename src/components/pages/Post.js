import React, { Component } from "react";
import moment from "moment";

import BaseLayout from "../templates/BaseLayout";
import { Markdown } from "../atoms/Common";

class Post extends Component {
  componentDidMount() {
    const { requestPost } = this.props;
    const { id } = this.props.match.params;
    requestPost(id);
  }

  render() {
    const { post, isFetching } = this.props;
    if (isFetching) return <p>Loading...</p>;

    return (
      <BaseLayout>
        <h1>{post.title}</h1>
        <div>
          <span>作成日: {moment(post.createdAt).format("YYYY.MM.DD HH:mm")}</span>
          <span>更新日: {moment(post.updatedAt).format("YYYY.MM.DD HH:mm")}</span>
        </div>
        <Markdown body={post.body} />
      </BaseLayout>
    );
  }
}

export default Post;
