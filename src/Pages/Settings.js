import React, { useState } from 'react';
import "../CSS/Toggle.css";
import "../CSS/Settings.css";
import IconButton from '../Components/IconButton';

function Settings() {
  const [unit, setUnit] = useState('Celsius');
  const [clockFormat, setClockFormat] = useState('12-hour');
  const [zipCode, setZipCode] = useState('');
  const [activities, setActivities] = useState(["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]);

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
        <div className='flex-center'>        
            <h2 className='left-justified'>Settings</h2>
            <div className="right-justified small-button">
                <IconButton 
                icon={'back'}
                text={'Return Home'}
                palette={"light"}
                linkTo={"/"}
                />
            </div>
        </div>
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
            <div >
                <h3>Edit Activities</h3>
                <p>Hint: Press Windows+"." or CTRL+CMD+space bar on Mac to open the emoji keyboard.</p>
                {activities.map((activity, index) => (
                    <div className='settings-list-div'>
                        <p>{index}</p>
                        <input type="text" defaultValue={activity}></input>
                        <IconButton icon="X" text="Remove" />
                    </div>
                    ))}
                    <IconButton icon="plus" text="Add Activity"/>    
            </div>
        </div>
        
    </div>
  );
}

export default Settings;
