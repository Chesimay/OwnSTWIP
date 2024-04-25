import React, { useState } from 'react';
import './Popup.css';

const PopUp = ({ title, onSave, onClose }) => {
  const [name, setName] = useState('');

  const handleSave = () => {
    onSave(name);
    setName('');
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>Close</button>
        </div>
        <div className="popup-content">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="popup-actions">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="close-without-saving-button" onClick={onClose}>Close without saving</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
