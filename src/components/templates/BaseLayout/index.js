import React from "react";
import styled from "styled-components";

const BaseLayout = props => {
  const { children } = props;
  return (
    <div>
      <Wrapper>{children}</Wrapper>
    </div>
  );
};

export default BaseLayout;

const Wrapper = styled.div`
  width: 100%;
`;
