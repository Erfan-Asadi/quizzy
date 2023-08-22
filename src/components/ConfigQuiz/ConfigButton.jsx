import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
  font-weight: 500;
  font-size: 13.93px;
  padding: 8px 25px;
  background: linear-gradient(135deg, #fcc822 0%, #ffcd2e 100%);
  box-shadow: 0px 10.45px 23.22px -6.96px #fbe18f;
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
const Button = ({disabled, children}) => {
  return (
    <StyledButton disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
