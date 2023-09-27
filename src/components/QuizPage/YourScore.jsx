import React from "react";
import styled from "styled-components";
import YourscoreBg from "../../assets/yourscore.svg";

const StyledPanel = styled.div`
  width: max(444px, 65%);
  height: 100%;
  min-height: 358px;
  margin: auto;
  background: url(${YourscoreBg}) 0 0 / 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 15px;

  h3 {
    font-size: 37.2px;
    margin-top: 24px;
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
  return (
    <div>
      <StyledPanel className="score-panel roboto">
        <h3>Your Score</h3>
        <p className="score bold">
          <strong>65</strong>/100
        </p>
        <ul className="answers-istatistic medium">
          <li>
            Total: <span>10</span>
          </li>
          <li>
            Correct: <span>4</span>
          </li>
          <li>
            Incorrect: <span>6</span>
          </li>
        </ul>
      </StyledPanel>
      
    </div>
  );
};

export default YourScore;
