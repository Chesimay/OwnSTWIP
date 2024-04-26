import React, { useState } from 'react';
import "../CSS/Toggle.css";
import "../CSS/Settings.css";
import "../index.css";
import IconButton from '../Components/IconButton';
import { useSettings, Activity } from '../Non-Component_JS_Files/SettingsContext';

function Settings() {
    const [zipCode, setZipCode] = useState('');
    //const [activities, setActivities] = useState(["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]);
    const { settings, setSettings } = useSettings();

    const handleUnitToggle = () => {
        setSettings(settings => ({
            ...settings,
            celsius: !settings.celsius
          }));
    };

    const handleClockToggle = () => {
        setSettings(settings => ({
            ...settings,
            twentyFourHourClock: !settings.twentyFourHourClock
          }));
    };

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    };

    const handleActivityChange = (index, newValue) => {
        const updatedActivities = [...settings.activities];
        const max = settings.activities.length-1;
        updatedActivities[index] = new Activity(updatedActivities[index].id, newValue);
        setSettings(settings => ({
            ...settings,
            activities: updatedActivities
          }));
    };

    const handleActivityRemove = (index) => {
        const updatedActivities = [...settings.activities];
        updatedActivities.splice(index, 1);
        setSettings(settings => ({
            ...settings,
            activities: updatedActivities
          }));    };

    const handleAddActivity = () => {
        //make a new activity with the given name and an ID one higher than the last ID in the list
        //a VERY jank solution to the ID problem, but it works for now
        const max = settings.activities.length-1;
        const updatedActivities = [...settings.activities, new Activity(settings.activities[max].id+1, name)];
        setSettings(settings => ({
            ...settings,
            activities: updatedActivities
        }));
    };

    // Make sure settings is defined before accessing its properties
    if (!settings || settings == undefined) {
        return <div>Loading...</div>;
    }
    //testing if settings imported properly
    // console.log("Settings thinks the zip code is " + settings.zipCode);
    // console.log("Setting's activities are " + settings.activities);
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

                    <p className='left-toggle' onClick={() => 
                        {
                            setSettings(settings => ({...settings,celsius: false}));
                            document.getElementById("Celsius").checked = false;
                        }
                        }>Fahrenheit</p>
                    <div className='toggle-div'>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={settings.celsius}
                                onChange={handleUnitToggle}
                                id='Celsius'
                            />
                            <span className="toggle-slider round"></span>
                        </label>
                    </div>
                    <p className='right-toggle'onClick={() => 
                        {
                            setSettings(settings => ({...settings,celsius: true}));
                            document.getElementById("Celsius").checked = true;
                        }
                        }>Celsius</p>

                </div>
                <div className='settings-div'>

                    <p className='left-toggle' onClick={() => 
                        {
                            setSettings(settings => ({...settings,twentyFourHourClock: false}));
                            document.getElementById("TwentyFourHour").checked = false;
                        }
                        }>12-Hour Clock</p>
                    <div className='toggle-div'>
                        <label className="toggle-switch">
                            <input
                                type="checkbox"
                                checked={settings.twentyFourHourClock}
                                onChange={handleClockToggle}
                                id="TwentyFourHour"
                            />
                            <span className="toggle-slider round"></span>
                        </label>
                    </div>
                    <p className='right-toggle' onClick={() => 
                        {
                            setSettings(settings => ({...settings,twentyFourHourClock: true}));
                            document.getElementById("TwentyFourHour").checked = true;
                        }
                        }>24-Hour Clock</p>

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
                <div className='small-button'>
                    <h3>Edit Activities</h3>
                    <p>Hint: Press Windows+"." or CTRL+CMD+space bar on Mac to open the emoji keyboard.</p>
                    {/* The following divs should be contained in such a way that they can be drag & dropped to reorder them, and their new order
                should be readable so that the array activity can be reordered to mirror the arrangement of the divs*/}
                    {settings.activities.map((activity, index) => (
                        <div key={index} className='evenly-spaced activity-div' style={{padding:"15px"}}>
                            <p className='minip'>{index + 1}</p>
                            <input className='text-input' type="text" value={activity.name} onChange={(e) => handleActivityChange(index, e.target.value)}></input>
                            <div className='small-button'>
                            <IconButton icon="X" text="Remove" onClick={() => handleActivityRemove(index)} />
                            </div>
                        </div>
                    ))}
                    <IconButton icon="plus" text="Add Activity" onClick={() => handleAddActivity()} />
                </div>
            </div>

        </div>
    );
}

export default Settings;
