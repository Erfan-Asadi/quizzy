import React, { memo, useContext } from "react";
import styled from "styled-components";
import YourscoreBg from "../../assets/yourscore.svg";
import { QuizContext } from "../../contexts/QuizContextProvider";

const StyledContainer = styled.div`
  overflow: auto;
  height: 450px;
  width: calc(100% - 20px);
`;

const StyledPanel = styled.div`
  width: max(444px, 65%);
  min-height: 100%;
  margin: 0 auto 82px;
  background: url(${YourscoreBg}) 0 0 / 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 15px;

  h3 {
    font-size: 37.2px;
  }
  .score {
    margin: 10px 0 27px;

    strong {
      font-size: 68.2px;
    }
  }
  .answers-istatistic {
    line-height: 23px;
    list-style-type: none;
    li {
      width: 80px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const YourScore = () => {
  const { userAnswers, questions } = useContext(QuizContext);

  const total = questions.length;
  const correct = Object.values(userAnswers).filter(
    (value) => value.correct === value.selected
  ).length;
  const score = Math.floor((correct / total) * 100);
  console.log(userAnswers);
  

  return (
    <StyledContainer>
      <StyledPanel className="score-panel roboto">
        <h3>Your Score</h3>
        <p className="score bold">
          <strong>{score}</strong>/100
        </p>
        <ul className="answers-istatistic medium">
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Correct: <span>{correct}</span>
          </li>
          <li>
            Incorrect: <span>{total - correct}</span>
          </li>
        </ul>
      </StyledPanel>
    </StyledContainer>
  );
};

export default  YourScore;
