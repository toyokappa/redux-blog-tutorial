import React from "react";
import styled from "styled-components";

import { Logo } from "../../atoms/Common";

const Header = () => {
  return (
    <HeaderContainer>
      <Inner>
        <Logo />
      </Inner>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  background-color: #263238;
`;

const Inner = styled.div`
  padding: 20px;
`;
