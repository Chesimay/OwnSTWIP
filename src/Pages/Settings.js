import React, { useState } from 'react';
import "../CSS/Toggle.css";
import "../CSS/Settings.css";
import IconButton from '../Components/IconButton';

function Settings() {
  const [unit, setUnit] = useState('Celsius');
  const [clockFormat, setClockFormat] = useState('12-hour');
  const [zipCode, setZipCode] = useState('');

  const handleUnitToggle = () => {
    setUnit(unit === 'Celsius' ? 'Fahrenheit' : 'Celsius');
  };

  const handleClockToggle = () => {
    setClockFormat(clockFormat === '12-hour' ? '24-hour' : '12-hour');
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };

  return (
    <div className='left-justified'>
        <h2>Settings</h2>
        <div className='settings-list-div'>
            <div className='settings-div'>

                <p className='left-toggle'>Celcius</p>
                <div className='toggle-div'>
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={unit === 'Fahrenheit'}
                        onChange={handleUnitToggle}
                    />
                        <span className="toggle-slider round"></span>
                    </label>
                </div>
                <p className='right-toggle'>Fahrenheit</p>

            </div>
            <div className='settings-div'>

                <p className='left-toggle'>12-Hour Clock</p>
                <div className='toggle-div'>
                    <label className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={clockFormat === '24-hour'}
                        onChange={handleClockToggle}
                    />
                        <span className="toggle-slider round"></span>
                    </label>
                </div>
                <p className='right-toggle'>24-Hour Clock</p>

            </div>
            <div className='settings-div'>
                
                <p>Zip Code:</p>
                <label>
                { //a ternary to check if a zip code has already been provided
                (zipCode === '' ? (
                    <input
                    type="text"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="Enter zip code"
                />
                ) : 
                <input
                    type="text"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    placeholder="You already entered a zip code (REALLY there shouldn't be placeholder text here, instead the code should be saved as the default value)"
                />)}
                </label>
            </div>
        </div>
        <IconButton 
            icon={'back'}
            text={'Return Home'}
            palette={"light"}
            linkTo={"/"}
            />
    </div>
  );
}

export default Settings;
