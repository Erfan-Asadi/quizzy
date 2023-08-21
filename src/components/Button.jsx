import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  font-weight: 500;
  font-size: 32px;
  padding: 8px 33px;
  background: linear-gradient(135deg, #fcc822 0%, #ffcd2e 100%);
  box-shadow: 0px 18px 40px -12px #fbe18f;
  color: #fff;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #e1b21c;
  }
  &:disabled {
    opacity: 0.4;
  }
`;
const Button = ({ activeModalHandler, disabled, children }) => {
  return (
    <StyledButton onClick={() => activeModalHandler(true)} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
