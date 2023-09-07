import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import UserLogo from "../assets/user.svg";
import { styled } from "styled-components";
import { QuizContext } from "../contexts/QuizContextProvider";
import randomHexGenerator from "../utils/randomHexGenerator";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px 26px 17.7px;
  margin: auto;
  width: calc(100% - 60px);
  height: 79px;
  border-bottom: 0.58px solid #ecece8;

  .username {
    font-size: 13.93px;
    font-weight: normal;
    color: #fcc822;
    margin-left: 5.8px;
    vertical-align: top;
  }
  .logo {
    width: 136px;
  }
`;
const Question = styled.section`
  padding-top: 19px;

  .question-header {
    font-size: 14px;
    color: #d1d1d1;
    text-align: center;
  }
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

const QuizPage = () => {
  const { username, questions } = useContext(QuizContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuestion = questions[activeIndex];

  return (
    <div>
      <StyledHeader>
        <Link to="/">
          <img src={Logo} alt="Quizzy Logo" className="logo" />
        </Link>
        <span>
          <img src={UserLogo} alt="User Icon" />
          <strong className="username">{username}</strong>
        </span>
      </StyledHeader>
      <Question>
        <header className="question-header">
          <small>
            Question {activeIndex + 1}/{questions.length}
          </small>
        </header>
        <div className="question-body">
          <p className="question-title">
            <span className="question-type">
              {activeQuestion.category}: {activeQuestion.difficulty}
            </span>
            {activeQuestion.question}
          </p>
          <ol className="answers-list" type="A">
            {activeQuestion.incorrect_answers.map((ans, i) => {
              const optionId = randomHexGenerator(15);

              return (
                <li key={i}>
                  <label htmlFor={optionId}>
                    <input type="radio" name="quizOption" id={optionId} />
                    <span>{ans}</span>
                  </label>
                </li>
              );
            })}
          </ol>
        </div>
      </Question>
    </div>
  );
};

export default QuizPage;
