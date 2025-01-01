import React from "react";
import "../styles/Modal.css";

function Modal({ show, message, onClose }) {
  if (!show) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        {onClose && (
          <button className="modal-close-button" onClick={onClose}>
            Done
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
