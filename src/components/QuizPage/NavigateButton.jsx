import React from "react";
import { styled } from "styled-components";
import nextIcon from "../../assets/next.svg";
import prevIcon from "../../assets/prev.svg";

const StyledButton = styled.button`
  font-weight: 500;
  font-family: inherit;
  font-size: 13.93px;
  padding: 8px 25px;
  color: #fff;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  text-transform: capitalize;

  &.next {
    background: #fcc822;
    box-shadow: 0px 10.45px 23.22px -6.96px #fbe18f;

    &:enabled {
      &:hover {
        background: #e1b21c;
      }
    }
  }
  &.previous {
    background: #d1d1d1;
    box-shadow: 0px 10.45px 23.22px -6.96px #d1d1d1;
    color: #333;

    &:enabled {
      &:hover {
        background: #b4b4b4;
      }
    }
    img {
      order: -1;
    }
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`;

const NavigateButton = ({ type, clickHandler, disabled }) => {
  return (
    <StyledButton className={type} onClick={clickHandler} disabled={disabled}>
      {type}
      <img
        src={type == "next" ? nextIcon : prevIcon}
        title={`Go to ${type} question`}
        alt="navigation icon"
      />
    </StyledButton>
  );
};

export default NavigateButton;
