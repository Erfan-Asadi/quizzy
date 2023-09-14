import React from "react";
import QuestionDisplayer from "./QuestionDisplayer";
import styled from "styled-components";

const StyledContainer = styled.div`
  overflow: hidden;

  .wrapper {
    width: 100%;
    display: flex;
    transition: 0.3s ease;

    .question {
      width: 100%;
      flex-shrink: 0;
    }
  }
`;

const QuestionsList = ({ questions, activeIndex }) => {
  return (
    <StyledContainer>
      <div
        className="wrapper"
        style={{ transform: `translateX(-${activeIndex}00%)` }}
      >
        {
            questions.map(question => (
                    <QuestionDisplayer key={question.question} question={question} />
            ))
        }
      </div>
    </StyledContainer>
  );
};

export default QuestionsList;
