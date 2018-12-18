import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Title>
      <Link to={"/"}>ReduxBlogTutorial</Link>
    </Title>
  );
};

export default Logo;

const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  line-height: 1;

  & > a {
    color: white;
    text-decoration: none;
  }
`;
