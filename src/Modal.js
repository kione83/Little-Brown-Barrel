import React from 'react';
import './Modal.css';


function Modal({ show, url, onClose }) {
    if (!show) {
        return null;
    }

    return (
      
      <div className="modal-overlay">
            <div className="modal-content">
                <iframe src={url} title="Whiskey Website" className="modal-iframe" />
                <button onClick={onClose} className="modal-close-button">Close</button>
            </div>
        </div>
    );
}

export default Modal;



        



