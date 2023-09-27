import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import UserLogo from "../assets/user.svg";
import { styled } from "styled-components";
import { QuizContext } from "../contexts/QuizContextProvider";
import NavigateButton from "../components/QuizPage/NavigateButton";
import QuestionsList from "../components/QuizPage/QuestionsList";
import ConfigButton from "../components/ConfigQuiz/ConfigButton";
import Modal from "../components/Modal";
import YourScore from "../components/QuizPage/YourScore";

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
const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 18px 75px 36px;
  flex-grow: 1;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
`;
const QuestionsCounter = styled.div`
  width: 100%;
  font-size: 14px;
  color: #d1d1d1;
  text-align: center;
  padding-top: 19px;
`;

const QuizPage = () => {
  const { username, questions, userAnswers } = useContext(QuizContext);
  const [activeIndex, setActiveIndex] = useState(0);

  // when 'submit' button appeared
  const [isModalActive, setIsModalActive] = useState(false);
  const MemoizedYourScore = useMemo(()=> <YourScore />, []);
  const isCompletedAnsweredQuiz = Object.keys(userAnswers).length ===  questions.length;

  const handlePrevQuestion = () => {
    if (activeIndex === 0) return;
    setActiveIndex(activeIndex - 1);
  };

  const handleNextQuestion = () => {
    if (activeIndex === questions.length - 1) return;
    setActiveIndex(activeIndex + 1);
  };


  return (
    <StyledContainer>
      <StyledHeader>
        <Link to="/">
          <img src={Logo} alt="Quizzy Logo" className="logo" />
        </Link>
        <span>
          <img src={UserLogo} alt="User Icon" />
          <strong className="username">{username}</strong>
        </span>
      </StyledHeader>
      <QuestionsCounter>
        Question {activeIndex + 1}/{questions.length}
      </QuestionsCounter>
      <QuestionsList questions={questions} activeIndex={activeIndex} />
      <StyledFooter>
        <NavigateButton
          type="previous"
          clickHandler={handlePrevQuestion}
          disabled={activeIndex === 0}
        />
        {activeIndex === questions.length - 1 ? (
          <ConfigButton clickHandler={() => setIsModalActive(true)} disabled={!isCompletedAnsweredQuiz}>Submit</ConfigButton>
        ) : (
          <NavigateButton type="next" clickHandler={handleNextQuestion} />
        )}
      </StyledFooter>

      <Modal
        isModalActive={isModalActive}
        closeModalHandler={() => setIsModalActive(false)}
      >
        {MemoizedYourScore}
      </Modal>
    </StyledContainer>
  );
};

export default QuizPage;
