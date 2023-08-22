import React from "react";
import { styled } from "styled-components";
import Button from "../ModalButton";

const StyledSection = styled.section`
  padding-top: 32px;
  width: 100%;

  h2 {
    font-size: 37.16px;
    color: #333;
    text-align: center;
  }

  footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
  }
`;

const ConfigPart = ({ title, children }) => {
  return (
    <StyledSection>
      <h2 className="roboto medium">{title}</h2>
      {children}
    </StyledSection>
  );
};

export default ConfigPart;
