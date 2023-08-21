import React from "react";
import { styled } from "styled-components";

const StyledLi = styled.li`
  font-size: 14px;
  padding: 10.12px 8.8px;
  border: 0;
  background-color: #d1d1d1;
  color: #000;
  width: fit-content;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover,
  &.selected {
    border-color: black;
    background-color: #fcc822;
  }
`;

const ListItem = ({ children, id, handleClick, selectedCategory }) => {
  return (
    <StyledLi
      className={`roboto medium ${selectedCategory === id && "selected"}`}
      onClick={() => {
        handleClick(id);
      }}
    >
      {children}
    </StyledLi>
  );
};

export default ListItem;
