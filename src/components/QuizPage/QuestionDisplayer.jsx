import React, { memo, useContext, useMemo } from "react";
import { styled } from "styled-components";
import randomHexGenerator from "../../utils/randomHexGenerator";
import shuffleArray from "../../utils/shuffleArray";
import HtmlParser from "react-html-parser";
import { QuizContext } from "../../contexts/QuizContextProvider";

const StyledSection = styled.section`
  .question-body {
    margin-top: 10px;

    .question-title {
      color: #fff;
      font-size: 27.8px;
      background-color: #fcc822;
      padding: 33.5px 27px 43.6px;
      position: relative;

      .question-type {
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px 7px;
        background-color: #333;
        color: #fcc822;
        font-size: 10px;
        font-weight: 500;
      }
    }
    .answers-list {
      margin-top: 32px;
      padding: 0 64px;

      li {
        position: relative;
        height: 60px;

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

          input {
            position: relative;

            &::after {
              width: 13px;
              height: 13px;
              background-color: #fff;
              border-radius: 50%;
              content: "";
              display: block;
              box-shadow: 0 0 0 3px #fff, 0 0 0 6px #d1d1d1,
                0 3px 5px 6px rgba(252, 200, 34, 0.3);
            }
            &:checked::after {
              background-color: #fcc822;
              box-shadow: 0 0 0 3px #fff, 0 0 0 6px #fcc822,
                0 3px 5px 6px rgba(252, 200, 34, 0.3);
            }
          }
          span {
            margin-left: 11px;
            font-size: 15px;
            font-weight: 600;
            color: #333;
          }
        }
      }
    }
  }
`;

const QuestionDisplayer = ({ question, activeIndex }) => {
  const allAnswers = [...question.incorrect_answers, question.correct_answer];
  const {setUserAnswers} = useContext(QuizContext);
  const shuffledAnswers = useMemo(()=> shuffleArray(allAnswers), []);
  const questionId = useMemo(()=> randomHexGenerator(10), []);

  const clickAnswerHandler = (ans, correctAns)=> {
    setUserAnswers(prev => ({
      ...prev,
      [activeIndex]: {
        selected: ans,
        correct: correctAns
      }
    }))
  }
  return (
    <StyledSection className="question">
      <div className="question-body">
        <p className="question-title">
          <span className="question-type">
            {question.category}: {question.difficulty}
          </span>
          {HtmlParser(question.question)}
        </p>
        <ol className="answers-list" type="A">
          {shuffledAnswers.map((ans, i) => {
            const optionId = randomHexGenerator(15);

            return (
              <li key={i}>
                <label htmlFor={optionId}>
                  
                  <input
                    type="radio"
                    name={`quizOption` + questionId}
                    id={optionId}
                    onChange={() => clickAnswerHandler(ans,question.correct_answer)}
                  />
                  <span>{HtmlParser(ans)}</span>
                </label>
              </li>
            );
          })}
        </ol>
      </div>
    </StyledSection>
  );
};

export default QuestionDisplayer;
