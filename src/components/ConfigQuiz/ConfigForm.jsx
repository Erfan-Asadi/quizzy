import React from "react";
import { styled } from "styled-components";

const StyledUl = styled.ul`
  padding-inline-start: 5vw;
  margin-top: 45px;

  li {
    font-size: 15px;
    font-weight: 500;
  }
  li::marker {
    color: #FCC822;
  }
`;
const StyledForm = styled.form`
  margin: auto;
  width: fit-content;
  margin-top: 57px;

  input {
    width: 160px;
    height: 45px;
    border: 1px solid #d1d1d1;
    background-color: #fff;
    font-family: inherit;
    font-size: 18px;
    outline-color: #FCC822;
    padding: 0 8px ;

    &::placeholder {
      color: #d1d1d1;
    }
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
      <StyledForm>
        <input
          type="number"
          max={max}
          placeholder={`max to ${max}`}
          onChange={(e) => changeHandler(e)}
        />
      </StyledForm>
      <StyledUl className="dangers-list">
        <li>A Maximum of 50 Questions can be retrieved per cal</li>
        {max < 50 && (
          <li>
            Only <u>{max}</u> questions are available for your chosen difficulty level.
          </li>
        )}
      </StyledUl>
    </div>
  );
};

export default ConfigForm;
