import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import UserLogo from "../assets/user.svg";
import { styled } from "styled-components";
import { QuizContext } from "../contexts/QuizContextProvider";
import QuestionDisplayer from "../components/QuizPage/QuestionDisplayer";
import NavigateButton from "../components/QuizPage/NavigateButton";

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
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 17.5px 75px;
`;

const QuizPage = () => {
  const { username, questions } = useContext(QuizContext);
  const [activeIndex, setActiveIndex] = useState(0);

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
      <QuestionDisplayer questions={questions} activeIndex={activeIndex} />
      <StyledFooter>
        <NavigateButton title="Previous" type="prev"/>
        <NavigateButton title="Next" />
      </StyledFooter>
    </div>
  );
};

export default QuizPage;
