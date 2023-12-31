import React from "react";
import { styled } from "styled-components";

const StyledModal = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
  transition: 0.24s ease-out;
  visibility: hidden;
  opacity: 0;
  
    &.active {
      visibility: visible;
      opacity: 1;
    }
  .backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
  }

  .modal-body {
    background-color: #fff;
    padding: 29px;
    width: calc(100% - 16%);
    position: relative;
    z-index: 3;

    .close-modal {
      position: absolute;
      top: 17px;
      right: 17px;
      font-size: 36px;
      color: #d1d1d1;
      background-color: transparent;
      border: 0;
      cursor: pointer;

      &:hover {
        color: #666;
      }
    }
  }
`;

const Modal = ({ closeModalHandler, isModalActive, children }) => {
  return (
    <StyledModal className={isModalActive && 'active'}>
      <div className="backdrop" onClick={closeModalHandler}></div>
      <div className="modal-body">
        <button
          className="close-modal"
          onClick={closeModalHandler}
        >
          &times;
        </button>
      {children}
      </div>
    </StyledModal>
  );
};

export default Modal;
