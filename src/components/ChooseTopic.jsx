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

const ChooseTopic = ({ handleClick, selectedCategory }) => {

  return (
    <section>
      <h1>Choose favorite topic</h1>
      <StyledUl className="topics-list">
        <ListItem
          id={100}
          handleClick={handleClick}
          selectedCategory={selectedCategory}
        >
          Any Category
        </ListItem>

        {categoryList.trivia_categories.map((category) => {
          return (
            <ListItem
              key={category.id}
              id={category.id}
              handleClick={handleClick}
              selectedCategory={selectedCategory}
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
