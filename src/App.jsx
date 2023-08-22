import { useState } from "react";
import "./App.css";
import Logo from "./assets/logo.svg";
import ModalButton from "./components/ModalButton";
import Modal from "./components/Modal";
import ConfigQuiz from "./components/ConfigQuiz/ConfigQuiz";

function App() {
  const [isModalActive, setIsModalActive] = useState(true);
  const [username, setUsername] = useState("Erfan Asadi");

  return (
    <div className="welcome">
      <img
        src={Logo}
        alt="Quizzy Logo"
        loading="lazy"
        className="welcome-logo"
      />
      <form>
        <input
          type="text"
          required
          placeholder="Your Name"
          className="welcome-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      <ModalButton
        activeModalHandler={() => setIsModalActive(true)}
        disabled={!username && true}
      >
        Go!
      </ModalButton>

      <Modal
        isModalActive={isModalActive}
        activeModalHandler={(value) => setIsModalActive(value)}
      >
        <ConfigQuiz />
      </Modal>
    </div>
  );
}

export default App;
