import React, { memo, useContext } from "react";
import styled from "styled-components";
import YourscoreBg from "../../assets/yourscore.svg";
import { QuizContext } from "../../contexts/QuizContextProvider";
import shuffleArray from "../../utils/shuffleArray";
import randomHexGenerator from "../../utils/randomHexGenerator";
import HtmlParser from "react-html-parser";

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
const StyledAnswersOl = styled.ol`
  margin: 12px 0 38px;
  padding: 0 36px;

  li {
    position: relative;
    height: 53px;
    pointer-events: none;
    user-select: none;
    
    &.selected::before {
      background-color: #fcc822;
    }
    &::before {
      width: 33px;
      height: 16px;
      border-radius: 3px 3px 0 3px;
      background-color: #d1d1d1;
      top: 5px;
      left: -21px;
      content: "";
      position: absolute;
      z-index: -1;
    }
    &::marker {
      color: #fff;
      font-size: 14px;
    }
    label {
      position: relative;
      top: 17px;
      left: 19px;
      cursor: pointer;

      .title {
        background-color: #cdfdcd;
        padding: 3px 5px;
        border-radius: 3px;
        color: green;
      }
      input {
        position: relative;

        &::after {
          width: 11px;
          height: 11px;
          background-color: #fff;
          border-radius: 50%;
          content: "";
          display: block;
          box-shadow: 0 0 0 2px #fff, 0 0 0 5px #fcc822,
            0 3px 5px 6px rgba(252, 200, 34, 0.3);
        }
        &:checked::after {
          background-color: #fcc822;
          box-shadow: 0 0 0 2px #fff, 0 0 0 5px #fcc822,
            0 3px 5px 6px rgba(252, 200, 34, 0.3);
        }
      }
      span {
        margin-left: 9px;
        font-size: 13px;
        font-weight: 600;
        color: #333;
        vertical-align: text-top;
      }
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
      <ul>
        {questions.map((q, ind) => {
          const allAnswers = [...q.incorrect_answers, q.correct_answer];
          const shuffledAnswers = shuffleArray(allAnswers);

          return (
            <li key={q.question}>
              <p>
                ({ind + 1}){q.question}
              </p>
              <StyledAnswersOl>
                {shuffledAnswers.map((ans, i) => {
                  return (
                    <li key={i}>
                      <label>
                        <input
                          type="radio"
                          checked={ans === userAnswers[ind].selected}
                        />
                        <span>{HtmlParser(ans)}</span>
                        {ans === userAnswers[ind].correct && (
                          <span className="title">Correct Answer</span>
                        )}
                      </label>
                    </li>
                  );
                })}
              </StyledAnswersOl>
            </li>
          );
        })}
      </ul>
    </StyledContainer>
  );
};

export default YourScore;
