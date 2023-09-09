import React from "react";
import { styled } from "styled-components";
import nextIcon from "../../assets/next.svg";
import prevIcon from "../../assets/prev.svg";

const StyledButton = styled.button`
  font-weight: 500;
  font-family: inherit;
  font-size: 13.93px;
  padding: 8px 25px;
  background: #fcc822;
  box-shadow: 0px 10.45px 23.22px -6.96px #fbe18f;
  color: #fff;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #e1b21c;
  }
  &:disabled {
    opacity: 0.25;
  }
  &.prev {
    background: #d1d1d1;
    box-shadow: 0px 10.45px 23.22px -6.96px #d1d1d1;
    color: #333;

    &:hover {
      background: #b4b4b4;
    }
    img {
      order: -1;
    }
  }
`;

const NavigateButton = ({ title, type = "next" }) => {
  return (
    <StyledButton className={type}>
      {title}
      <img
        src={type == "next" ? nextIcon : prevIcon}
        title={`Go to ${type} question`}
        alt="navigation icon"
      />
    </StyledButton>
  );
};

export default NavigateButton;
