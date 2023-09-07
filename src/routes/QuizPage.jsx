import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import UserLogo from "../assets/user.svg";
import { styled } from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 29px 26px 17.7px;
  margin: auto;
  width: calc(100% - 60px);
  height: 79px;
  border-bottom: .58px solid #ECECE8;

  .username {
    font-size: 13.93px;
    font-weight: normal;
    color: #FCC822;
    margin-left: 5.8px;
    vertical-align: top;
  }
  .logo {
    width: 136px;
  }
`;

const QuizPage = () => {
  return (
    <div>
      <StyledHeader>
        <Link to="/">
          <img src={Logo} alt="Quizzy Logo" className="logo"/>
        </Link>
        <span>
          <img src={UserLogo} alt="User Icon" />
          <strong className="username">Erfan</strong>
        </span>
      </StyledHeader>
    </div>
  );
};

export default QuizPage;
