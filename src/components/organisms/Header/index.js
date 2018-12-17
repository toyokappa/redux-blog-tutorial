import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <Inner>
        <Logo>ReduxBlogTutorial</Logo>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  color: white;
  background-color: #263238;
`;

const Inner = styled.div`
  padding: 20px;
`;

const Logo = styled.span`
  font-weight: bold;
`;
