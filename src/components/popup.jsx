import React from 'react';
import '../styles/popup.css';

const ComingSoonModal = () => {

  const handleClose = () => {
    // Implement the close functionality, e.g., setting a state to hide the modal
  };

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="loader">
          <div className="container-pop">
            <div className="carousel">
              <div className="love"></div>
              <div className="love"></div>
              <div className="love"></div>
              <div className="love"></div>
              <div className="love"></div>
              <div className="love"></div>
              <div className="love"></div>
            </div>
          </div>
          <div className="container-pop">
            <div className="carousel">
              <div className="death"></div>
              <div className="death"></div>
              <div className="death"></div>
              <div className="death"></div>
              <div className="death"></div>
              <div className="death"></div>
              <div className="death"></div>
            </div>
          </div>
          <div className="container-pop">
            <div className="carousel">
              <div className="robots"></div>
              <div className="robots"></div>
              <div className="robots"></div>
              <div className="robots"></div>
              <div className="robots"></div>
              <div className="robots"></div>
              <div className="robots"></div>
            </div>
          </div>
        </div>
        <h2>Coming Soon</h2>
        
      </div>
    </div>
  );
};

export default ComingSoonModal;
