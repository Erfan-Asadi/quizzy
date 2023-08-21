import { useEffect, useState } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.svg";
import Button from "./components/Button";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="welcome">
      <img src={Logo} alt="Quizzy Logo" lazy="loading" className="welcome-logo"/>
      <form>
        <input
          type="text"
          required
          placeholder="Your Name"
          className="welcome-input"
        />
      </form>
      <Button>Go!</Button>
      <Modal />
    </div>
  );
}

export default App;
