import React from "react";
import { styled } from "styled-components";

const StyledLi = styled.li`
  font-size: 14.7px;
  padding: 10.12px 8.8px;
  border: 0;
  background-color: #d1d1d1;
  color: #000;
  width: fit-content;
  cursor: pointer;
  border: 2px solid transparent;
  text-transform: capitalize;
  
  text-align: center;
  &:hover,
  &.selected {
    border-color: black;
    background-color: #fcc822;
  }
`;

const ListItem = ({ children, id, handleSelected, selectedId }) => {
  return (
    <StyledLi
      className={`roboto medium ${selectedId === id && "selected"}`}
      onClick={() => handleSelected(id)}
    >
      {children}
    </StyledLi>
  );
};

export default ListItem;
