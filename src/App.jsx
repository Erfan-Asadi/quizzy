import { useContext, useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import ModalButton from "./components/ModalButton";
import Modal from "./components/Modal";
import ConfigQuiz from "./components/ConfigQuiz/ConfigQuiz";
import { QuizContext } from "./contexts/QuizContextProvider";

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const {setUsername, username} = useContext(QuizContext);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setIsModalActive(true);
  };
  return (
    <div className="welcome">
      <img
        src={Logo}
        alt="Quizzy Logo"
        loading="lazy"
        className="welcome-logo"
      />
      <form onSubmit={submitHandler}>
        <input
          type="text"
          required
          placeholder="Your Name"
          className="welcome-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      <ModalButton disabled={!username && true}>Go!</ModalButton>
      </form>
      <Modal
        isModalActive={isModalActive}
        closeModalHandler={() => setIsModalActive(false)}
      >
        <ConfigQuiz />
      </Modal>
    </div>
  );
}

export default App;
