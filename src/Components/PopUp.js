import React, { useState, useRef, useEffect } from 'react'; 
import '../CSS/PopUp.css';
import Checklist from './Checklist';

const PopUp = ({ title, onSave, hidden, setHidden, type }) => {
  const [name, setName] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [yearly, setYearly] = useState(false);

  const [showWarning, setShowWarning] = useState(false);
  const [showWarningDate, setShowWarningDate] = useState(false);

  const popupRef = useRef(null);

  const hide = () => {
    setHidden();
    setShowWarning(false);
    setName('');
  };
  const handleSave = () => {
    if(name === null || name === ""){
      setShowWarning(true);
    }
      else{
      onSave(name);
      hide();
    }
  };
  const onClose = () => {
    hide();
  };
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Clicked outside of the popup, so close it
        hide();
      }
    };

    // Attach the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Detach the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setHidden]);

  let display = "none";
  if(hidden){
    display = "flex";
  }

  if(type == "calendar"){
    return (
      <div className="popup" style={{display: display}}>
        <div className="popup-inner" ref={popupRef}>
          <div className="popup-header">
            <h2>{title}</h2>
            <button className="close-button" onClick={onClose}>X</button>
          </div>
          <div className="popup-content">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            {showWarning && <p className="warning">Please enter a name before saving.</p>}
          </div>
          <div className="popup-content">
            <label htmlFor="start-date">Next Start Date:</label>
            <input
              type="date"
              id="start-date"
              value={start}
              required
              onChange={(e) => setStart(e.target.value)}
            />
            {showWarningDate && <p className="warning">Please enter a date before saving.</p>}
          </div>
          <div className="popup-content">
            <label htmlFor="end-date">Next End Date:</label>
            <input
              type="date"
              id="end-date"
              value={end}
              required
              onChange={(e) => setEnd(e.target.value)}
            />
            {showWarningDate && <p className="warning">Please enter a date before saving.</p>}
          </div>
          <div className="popup-content">
            <Checklist 
            title={""}
            items={["Repeat with these dates yearly?"]}
            />
          </div>
          <div className="popup-actions">
            <button className="save-button" onClick={handleSave}>Save</button>
            <button className="close-without-saving-button" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
  //else if type == activity or anything else
  return (
    <div className="popup" style={{display: display}}>
      <div className="popup-inner" ref={popupRef}>
        <div className="popup-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <div className="popup-content">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          {showWarning && <p className="warning">Please enter a name before saving.</p>}
        </div>
        <div className="centered">
          <p style= {{maxWidth: "200px", fontSize: "calc(10px + 0.2vw)", color: "var(--dark-gray)"}}>&emsp;&emsp;Hint: Press Windows+"." or CTRL+CMD+space bar on Mac to open the emoji keyboard.</p>
        </div>
        <div className="popup-actions">
          <button className="save-button" onClick={handleSave}>Save</button>
          <button className="close-without-saving-button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
