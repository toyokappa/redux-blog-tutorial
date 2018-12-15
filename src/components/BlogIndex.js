import React from "react";

const BlogIndex = ({ blogList }) => {
  const blogIndex = blogList.map(blogItem => {
    return <li key={blogItem.sys.id}>{blogItem.fields.title}</li>;
  });
  return <ul>{blogIndex}</ul>;
};

export default BlogIndex;
