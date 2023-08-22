import React from "react";
import ListItem from "../ListItem";
import { styled } from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 0 30px;
  margin-top: 27px;
`;

const ConfigList = ({ handleSelected, data, selectedId }) => {
  return (
    <StyledUl className="topics-list">
      {data.map((item) => {
        return (
          <ListItem
            key={item.id}
            id={item.id}
            handleSelected={handleSelected}
            selectedId={selectedId}
          >
            {item.name}
          </ListItem>
        );
      })}
    </StyledUl>
  );
};

export default ConfigList;
