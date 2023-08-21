import { useEffect, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.svg";
import Button from "./components/Button";
import Modal from "./components/Modal";
function App() {
  const [isModalActive, setIsModalActive] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="welcome">
      <img
        src={Logo}
        alt="Quizzy Logo"
        lazy="loading"
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
      <Button
        activeModalHandler={() => setIsModalActive(true)}
        disabled={!username && true}
      >
        Go!
      </Button>

      <Modal
        isModalActive={isModalActive}
        activeModalHandler={(value) => setIsModalActive(value)}
      />
    </div>
  );
}

export default App;
