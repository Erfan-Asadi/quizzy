import React, { createContext, useState } from "react";

export const QuizContext = createContext(null);

const QuizContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  return (
    <QuizContext.Provider
      value={{
        username,
        setUsername,
        questions,
        setQuestions,
        userAnswers,
        setUserAnswers,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
