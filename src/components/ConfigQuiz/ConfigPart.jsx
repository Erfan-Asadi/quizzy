import React from "react";
import { styled } from "styled-components";

const StyledSection = styled.section`
  padding-top: 32px;
  width: 100%;

  h2 {
    font-size: 37.16px;
    color: #333;
    text-align: center;
  }
`;

const ConfigPart = ({ title, children }) => {
  return (
    <StyledSection className="config-part">
      <h2 className="roboto medium">{title}</h2>
      {children}
    </StyledSection>
  );
};

export default ConfigPart;
