import React from "react";
import { styled } from "styled-components";

const StyledUl = styled.ul`
  padding-inline-start: 5vw;

  li {
    font-size: 15px;
    font-weight: 500;
  }
  li::marker {
    color: red;
  }
`;

const ConfigForm = ({ maxAmount = 50, handleAmountValue }) => {
  const max = maxAmount < 50 ? maxAmount : 50;

  const changeHandler = (e) => {
    const value = parseInt(e.target.value);
    if (value >= max) {
      handleAmountValue(max); //
    } else {
      handleAmountValue(value);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          max={max}
          placeholder={`max to ${max}`}
          onChange={(e) => changeHandler(e)}
        />
      </form>
      <StyledUl className="dangers-list">
        <li>A Maximum of 50 Questions can be retrieved per cal</li>
        {max < 50 && (
          <li>
            Only{max} questions are available for your chosen difficulty
            level.
          </li>
        )}
      </StyledUl>
    </div>
  );
};

export default ConfigForm;
