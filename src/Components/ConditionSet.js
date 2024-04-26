import '../index.css';
import "../CSS/ConditionSet.css";
import React, { useState, useEffect, useRef } from 'react';
import Checklist from './Checklist';
import PopUp from './PopUp';
import IconButton from './IconButton';
import { Activity, useSettings } from '../Non-Component_JS_Files/SettingsContext';

function ConditionSet({ uniqueID }) {
    const [lowTemp, setLowTemp] = useState();
    const [highTemp, setHighTemp] = useState();
    const [activityPopup, setActivityPopup] = useState(false);
    const [seasonPopup, setSeasonPopup] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const { settings, setSettings } = useSettings();
    const conditionRef = useRef(null);
    
    const twelve = ["12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
    const twentyfour = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];

    
    useEffect(() => {
        const handleClickBackground = (event) => {
        if (conditionRef.current && !conditionRef.current.contains(event.target)) {
            // Clicked on the background of the dropdown, so toggle it
            setOpen(!isOpen);
        }
        };

        // Attach the event listener
        document.addEventListener('mousedown', handleClickBackground);

        // Detach the event listener on component unmount
        return () => {
        document.removeEventListener('mousedown', handleClickBackground);
        };
    }, [isOpen]);
    
    return (
        <div className='dropdown-container'>
            <h1>Condition Set {uniqueID}</h1>
            {isOpen ?
                (<div ref={conditionRef}>
                    <PopUp
                    title={"Add Activity"}
                    hidden={activityPopup}
                    setHidden={() => setActivityPopup(false)}
                    onSave={(name) => {
                        //make a new activity with the given name and an ID one higher than the last ID in the list
                        //a VERY jank solution to the ID problem, but it works for now
                        const max = settings.activities.length - 1;
                        const updatedActivities = [...settings.activities, new Activity(settings.activities[max].id + 1, name)];
                        setSettings(settings => ({
                            ...settings,
                            activities: updatedActivities
                        }));
                        console.log("testing, adding " + name + "...");
                    }}
                    type={"activity"}
                />
                <PopUp
                    title={"Add Season"}
                    hidden={seasonPopup}
                    setHidden={() => setSeasonPopup(false)}
                    onSave={(name) => {
                        const max = settings.activities.length - 1;
                        const updatedActivities = [...settings.activities, new Activity(settings.activities[max].id + 1, name)];
                        setSettings(settings => ({
                            ...settings,
                            activities: updatedActivities
                        }));
                        console.log("testing, adding " + name + "...");
                    }}
                    type={"calendar"}
                />

                <p className='note'>Any category with <span style={{ fontWeight: "bold" }}>no</span> selections will not be considered as part of this condition set. </p>
                <Checklist
                    title={"Solar Day"}
                    items={["🏙️ Daylight", "🌃 Night", "🌇 Twilight", ["Sunrise Twilight", "Sunset Twilight"]]} />
                <Checklist
                    title={"24-Hour Day"}
                    items={(settings.twentyFourHourClock ? twentyfour : twelve)}
                    columns={2} />

                <Checklist
                    title={"Meteorological Season"}
                    items={["🌱 Spring", "🏖️ Summer", "🍁 Autumn", "⛄ Winter"]} />

                <Checklist
                    title={"Month"}
                    items={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"]}
                    columns={2} />

                <Checklist
                    title={"Weekday"}
                    items={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
                    columns={2}
                />

                <h2>Temperature Range</h2>
                <div className='evenly-spaced'>
                    <div className='text-input-holder'>
                        <div className="input-container">
                            <input type="number" className="text-input" placeholder=" " step=".01"
                                value={lowTemp} onChange={event => setLowTemp(event.target.value)}></input>
                            <span className="text-input-placeholder">Low</span>
                        </div>
                        <p className='text-input-descriptor'>{(settings.celsius ? '° C' : '° F')}</p>
                    </div>
                    <p style={{ flexGrow: "2", justifySelf: "center", textJustify: "center", width: "20%" }}>&emsp; - &emsp;</p>
                    <div className='text-input-holder'>
                        <div className="input-container">
                            <input type="number" className="text-input" placeholder=" " step=".01"
                                value={highTemp} onChange={event => setHighTemp(event.target.value)}></input>
                            <span className="text-input-placeholder">High</span>
                        </div>
                        <p className='text-input-descriptor'>{(settings.celsius ? '° C' : '° F')}</p>
                    </div>
                </div>

                <div style={{ justifyContent: "space-between", width: "90%", display: "flex", alignItems: "top" }}>
                    <Checklist
                        title={"Activity"}
                        items={settings.activities.map((element) => { return element.name; })} /* get the names of each activity */
                        columns={1} /* was Math.ceil(activities.length/6.0), but the following div would need to be absolute to make it work */
                    />
                    <div className="small-button" style={{ padding: "10px", flexGrow: 0.2, alignContent: "top", justifyContent: 'right' }}>
                        <IconButton
                            icon={"plus"}
                            text={"Add Activity"}
                            palette={"dark"}
                            onClick={() => setActivityPopup(true)}
                        />
                    </div>
                </div>
                </div>)
                :
                (<div ref={conditionRef}>haha loser</div>)}
        </div>
    );
}

export default ConditionSet;