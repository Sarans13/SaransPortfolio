import React from "react";
import "../styles/Modal.css";

function CentralModal({ show, message, onClose }) {
  if (!show) return null;
  return (
    <div className="modal-overlay" style={{top: "60%", left: "50%", transform : "translate(-50%,-50%)", background: "rgba(0, 0, 0, 0.7)"}}>
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

export default CentralModal;
