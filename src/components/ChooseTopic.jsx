import React, { useState } from "react";
import categoryList from "../api/api_category.json";
import ListItem from "./ListItem";
import { styled } from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  padding: 27px 30px;
`;

const ChooseTopic = ({ handleClick }) => {
  const [selectedId, setSelectedId] = useState(100);

  const toggleSelectedId = (id) => {
    setSelectedId(id);
  };

  return (
    <section>
      <h1>Choose favorite topic</h1>
      <StyledUl className="topics-list">
        <ListItem
          id={100}
          handleClick={handleClick}
          toggleSelectedId={toggleSelectedId}
          selectedId={selectedId}
        >
          Any Category
        </ListItem>

        {categoryList.trivia_categories.map((category) => {
          return (
            <ListItem
              key={category.id}
              id={category.id}
              handleClick={handleClick}
              toggleSelectedId={toggleSelectedId}
              selectedId={selectedId}
            >
              {category.name}
            </ListItem>
          );
        })}
      </StyledUl>
    </section>
  );
};

export default ChooseTopic;
