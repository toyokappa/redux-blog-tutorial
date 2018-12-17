import React from "react";
import styled from "styled-components";

import Header from "../../organisms/Header";

const BaseLayout = props => {
  const { children } = props;
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default BaseLayout;

const Wrapper = styled.div``;
